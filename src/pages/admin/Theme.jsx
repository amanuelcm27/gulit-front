import React, { useEffect, useRef, useState } from "react";
import ThemeTemplate from "./ThemeTemplate";
import useFormHandler from "../../handlers/useFormHandler";
import { apiRequest } from "../../handlers/apiHandler";
import InfoCard from "../../components/InfoCard";
import LoadingCard from "../../components/LoadingCard";
import { usecheckStoreOwnership } from "../../handlers/checkOwnership";
import { createObjectURLIfObject } from "../../utils/createObjectUrl";
import StoreThemeForm from "../../components/StoreThemeForm";

const Theme = () => {
  const [store, setStore] = useState(null);
  const [infoKey, setInfoKey] = useState(0);
  const [formData, handleChange, setFormData] = useFormHandler({
    name: store?.name || "",
    logo: store?.logo || null,
    slogan: store?.slogan || "",
    p_image_1: store?.p_image_1 || null,
    p_image_2: store?.p_image_2 || null,
    description: store?.description || "",
  });
  const formValid = () => {
    const requiredFields = [
      "name",
      "slogan",
      "description",
      "logo",
      "p_image_1",
      "p_image_2",
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
      if (["logo", "p_image_1", "p_image_2"].includes(field)) {
        if (typeof value !== "string") {
          data.append(field, value); // only add it to the returned data if it's a file
        }
      } else {
        // Append all other fields
        data.append(field, value);
      }
    });

    return data;
  };
  const createStore = async () => {
    const validatedData = formValid();
    if (validatedData) {
      const response = await apiRequest("post", "store_create/", validatedData);
      if (response.success === false) {
        setInfo("Error in creating store");
      } else {
        setInfo("Store has been created");
      }
    }
  };

  const updateStore = async () => {
    const validatedData = formValid();
    const response = await apiRequest(
      "patch",
      `update_store/${store?.id}/`,
      validatedData
    );
    if (response.success === false) {
      setInfo("Cannot update store data");
      setError(true);
    } else {
      setInfo("Store has been updated");
      setError(false);
    }
    setInfoKey(infoKey + 1);
  };

  const [ownsStore, loading, error, info, setInfo, setError] =
    usecheckStoreOwnership(setStore);

  useEffect(() => {
    if (store) {
      setFormData({
        name: store.name || "",
        logo: store.logo || null,
        slogan: store.slogan || "",
        p_image_1: store.p_image_1 || null,
        p_image_2: store.p_image_2 || null,
        description: store.description || "",
      });
    }
  }, [store]);

  return (
    <>
      <InfoCard info={info} iserror={error} infokey={infoKey} />
      <div className="w-[35%] h-[600px] overflow-y-scroll relative">
        <LoadingCard text="theme" show={loading} />
        <div className="text-center m-2">
          <span className="font-bold text-4xl">
            {ownsStore ? "Edit" : "Setup"} your store
          </span>
        </div>
        <StoreThemeForm
          formData={formData}
          handleChange={handleChange}
          ownsStore={ownsStore}
          updateStore={updateStore}
          createStore={createStore}
        />
      </div>
      <div className="w-[50%] h-[600px] overflow-y-scroll relative">
        <LoadingCard text="theme" show={loading} />
        <div className="text-center m-2 flex flex-col">
          <span className="font-light text-lg">your store theme </span>
          <span className="font-extralight">scroll to see more </span>
        </div>
        <ThemeTemplate
          logo={createObjectURLIfObject(formData.logo)}
          slogan={formData.slogan}
          header={createObjectURLIfObject(formData.p_image_1)}
          bottomImage={createObjectURLIfObject(formData.p_image_2)}
          storeId = {store?.id}
        />
      </div>
    </>
  );
};

export default Theme;
