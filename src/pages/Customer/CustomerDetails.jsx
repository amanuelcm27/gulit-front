import React, { useEffect, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import EmptyCard from "../../components/EmptyCard";
import useFormHandler from "../../handlers/useFormHandler";
import { apiRequest } from "../../handlers/apiHandler";
import LoadingCard from "../../components/LoadingCard";
import InfoCard from "../../components/InfoCard";

const CustomerDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [ownsProfile, setOwnsProfile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("");
  const [infoKey, setInfoKey] = useState(0);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, handleChange, setFormData] = useFormHandler({
    first_name: profile?.first_name || "",
    last_name: profile?.last_name || "",
    email: profile?.email || "",
    city: profile?.city || "",
    state: profile?.state || "",
    address: profile?.address || "",
  });

  const fetchProfile = async () => {
    const response = await apiRequest("get", "get_customer_profile/");
    if (response.success === false) {
      setError(true);
      setInfo("Couldn't load profile");
    } else {
      setLoading(false);
      if (response.profile_set === false) {
        setOwnsProfile(false);
      } else {
        setProfile(response);
        setOwnsProfile(true);
      }
    }
  };
  const formValid = () => {
    const requiredFields = [
      "first_name",
      "last_name",
      "email",
      "city",
      "state",
      "address",
    ];
    const isEmpty = requiredFields.some((field) => !formData[field]);

    if (isEmpty) {
      setInfo("All fields are required");
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };
  const createProfile = async () => {
    const isValid = formValid();
    console.log(formData);
    if (isValid) {
      setLoading(true);
      const response = await apiRequest(
        "post",
        "create_customer_profile/",
        formData
      );
      setLoading(false);
      if (response.success === false) {
        setError(true);
        setInfo("Error in creating profile");
      } else {
        setProfile(response);
        setInfo("Profile created successfully");
        setOwnsProfile(true);
      }
    }
    setInfoKey(infoKey + 1);
  };
  const updateProfile = async (id) =>  { 
    const isValid = formValid();
    if (isValid) { 
      setLoading(true);
      const response = await apiRequest("patch", `update_customer_profile/${id}/`, formData);
      setLoading(false);
      if (response.success === false) {
        setError(true);
        setInfo("Error in updating profile");
        
      } else {
        setInfo("Profile updated successfully");
        fetchProfile();
        setIsEditing(false);
      }
    }
    setInfoKey(infoKey + 1);

  }
  useEffect(() => {
    fetchProfile();
  }, []);
  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email,
        city: profile.city,
        state: profile.state,
        address: profile.address,
      });
    }
  }, [profile]);
  return (
    <>
      <InfoCard info={info} infokey={infoKey} iserror={error} />
      <div className="relative">
        <LoadingCard text="profile" show={loading} />
        <span className="text-4xl font-extrabold m-4 max-sm:text-xl">Your Details</span>
        <div>
          <div className="m-4 max-sm:m-2">
            <div className="border-b-2">Personal details</div>
            <div className="flex flex-col bg-gray-100 m-4 max-sm:mt-2 max-sm:m-2">
              <div className="flex max-sm:flex-col max-sm:items-start p-4 items-center">
                <span>First Name </span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2  p-2"
                    placeholder="Your first name"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="bg-gray-200 w-[200px] truncate mx-2 p-4">
                    {formData.first_name}
                  </div>
                )}
                <span>Last Name </span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2 p-2"
                    placeholder="Your last name"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="bg-gray-200 w-[200px]  truncate mx-2 p-4">
                    {formData.last_name}
                  </div>
                )}
              </div>
              <div className="flex max-sm:flex-col max-sm:items-start items-center p-4">
                <span>Email</span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2 p-2"
                    placeholder="Your email"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="mx-2 p-4 w-[200px] truncate bg-gray-200">
                    {formData.email}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="border-b-2">Delivery details</div>
            <div className="flex flex-col bg-gray-100 m-4 max-sm:m-0 max-sm:my-3">
              <div className="flex max-sm:flex-col max-sm:items-start p-4 items-center">
                <span>City </span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2 p-2"
                    placeholder="Your city"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="bg-gray-200 w-[200px] truncate mx-2 p-4">
                    {formData.city}
                  </div>
                )}
                <span>State </span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2 p-2"
                    placeholder="Your state"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="bg-gray-200 w-[200px] truncate mx-2 p-4">
                    {formData.state}
                  </div>
                )}
              </div>
              <div className="flex max-sm:flex-col max-sm:items-start items-center p-4">
                <span>Address</span>
                {!ownsProfile || isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-white border w-[200px] mx-2 p-2"
                    placeholder="Your delivery address"
                  />
                ) : (
                  <div onClick={()=>setIsEditing(true)} className="mx-2 p-4 w-[200px] truncate bg-gray-200">
                    {formData.address}
                  </div>
                )}
              </div>
            </div>
            {!ownsProfile ? (
              <SubmitButton
                name="Create profile"
                handleSubmit={createProfile}
                otherStyles="bg-orange-400 px-8 "
              />
            ) : (
              <div>
                {isEditing && (
                  <SubmitButton
                    name="Cancel"
                    handleSubmit={() => {
                      setIsEditing(false);
                    }}
                    otherStyles="bg-black px-8 mx-4 max-sm:m-0"
                  />
                )}
                <SubmitButton
                  name="Update profile"
                  handleSubmit={() => {
                    isEditing ? updateProfile(profile.id) : setIsEditing(true);
                  }}
                  otherStyles="bg-orange-400 px-8 max-sm:my-4"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomerDetails;
