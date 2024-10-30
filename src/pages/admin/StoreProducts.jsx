import React, { useEffect, useRef, useState } from "react";
import Product from "../../components/Product";
import useFormHandler from "../../handlers/useFormHandler";
import InfoCard from "../../components/InfoCard";
import { apiRequest } from "../../handlers/apiHandler";
import LoadingCard from "../../components/LoadingCard";
import EmptyCard from "../../components/EmptyCard";
import { usecheckStoreOwnership } from "../../handlers/checkOwnership";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm";

const StoreProducts = () => {
  const [showProductForm, setProductForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [infoKey, setInfoKey] = useState(0);
  const navigate = useNavigate();
  const [formData, handleChange, clearForm, setFormData] = useFormHandler({
    name: "",
    price: "",
    discount: "",
    description: "",
    category: "",
    quantity: "",
    image: null,
  });

  const formValid = () => {
    const requiredFields = [
      "name",
      "price",
      "discount",
      "quantity",
      "description",
      "category",
      "image",
    ];
    const isEmpty = requiredFields.some((field) => !formData[field]);

    if (isEmpty) {
      setInfo("All fields are required");
      setError(true);
      return false;
    }

    const data = new FormData();
    requiredFields.forEach((field) => {
      const value = formData[field];
      if (field === "image") {
        if (typeof value !== "string") {
          data.append(field, value); // only append the image field if it is not a string
        }
      } else {
        data.append(field, formData[field]);
      }
    });
    return data;
  };
  const createProduct = async (flag) => {
    const validatedData = formValid();
    if (validatedData) {
      const response = await apiRequest(
        "post",
        "product_create/",
        validatedData
      );
      if (response.success === false) {
        setInfo("Error in creating product");
        setError(true);
      } else {
        setInfo("Product has been created");
        flag === "save&add" && clearForm();
        setError(false);
        setTimeout(() => {
          setProductForm(flag === "save&add" ? true : false);
        }, 2000);
      }
      setInfoKey(infoKey + 1);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    const response = await apiRequest("get", "list_products/");
    if (response.success === false) {
      setInfo("Network Error Try again later");
      setError(true);
    } else {
      setLoading(false);
      setProducts(response);
    }
  };
  const updateProduct = async (id) => {
    const validatedData = formValid();
    const response = await apiRequest(
      "patch",
      `update_product/${id}/`,
      validatedData
    );
    if (response.success === false) {
      setInfo("Error in updating product");
      setError(true);
    } else {
      setInfo("Product has been updated");
      setError(false);
      setTimeout(() => {
        fetchProducts()
        setProductForm(false);
      }, 2000);
    }
    setInfoKey( infoKey + 1);
  };
  const [ownsStore, loading, error, info, setInfo, setError, setLoading] =
    usecheckStoreOwnership(fetchProducts);

  return (
    <>
      <InfoCard iserror={error} info={info} infokey={infoKey} />
      <div className="w-[85%] h-[600px] relative">
        <LoadingCard text="Products" show={loading} />
        {showProductForm && (
          <ProductForm
            formData={formData}
            handleChange={handleChange}
            editMode={editMode}
            setEditMode={setEditMode}
            setProductForm={setProductForm}
            updateProduct={updateProduct}
            createProduct={createProduct}
          />
        )}
        {ownsStore ? (
          !showProductForm && (
            <div className=" h-full overflow-y-scroll">
              <div className=" border-b-2 flex m-8 items-center">
                <span className="flex-1 font-bold text-2xl">
                  Availabe products in your store
                </span>
                <span
                  onClick={() => {
                    clearForm(), setProductForm(true);
                  }}
                  className="hover:bg-gray-200 rounded-lg m-2 cursor-pointer p-2"
                >
                  <i className="fa-solid fa-plus"></i> New Product
                </span>
              </div>
              <button
                onClick={fetchProducts}
                className="mx-4 p-2 rounded-xl active:bg-gray-200 bg-gray-100"
              >
                <i class="fa-solid fa-arrows-rotate"></i> <span>Refresh</span>
              </button>
              <div className="flex flex-wrap justify-center h-full ">
                {products.length >= 1 ? (
                  products.map((product) => (
                    <Product
                      key={product.id}
                      product={product}
                      showEditButton={true}
                      setFormData={() => {
                        setEditMode(true),
                          setFormData(product),
                          setProductForm(true);
                      }}
                    />
                  ))
                ) : (
                  <EmptyCard
                    styles=" w-full h-[50%] "
                    text="You don't have any products in your store"
                    btext="Add Products"
                    handleClick={() => setProductForm(true)}
                  />
                )}
              </div>
            </div>
          )
        ) : (
          <EmptyCard
            styles=" w-full h-full "
            text="You don't own a store yet"
            btext="Create Store"
            handleClick={() => navigate("/admin/theme")}
          />
        )}
      </div>
    </>
  );
};

export default StoreProducts;
