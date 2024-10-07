import { useEffect, useState } from "react";
import { apiRequest } from "./apiHandler";

export const usecheckStoreOwnership = (otherFunction) => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ownsStore, setOwnsStore] = useState(false);
  useEffect(() => {
    const checkOwnership = async () => {
      const response = await apiRequest("get", "store_by_user/");
      if (response.success === false) {
        setInfo("Error Try Again Later");
        setError(true);
      } else {
        setLoading(false);
        if (response.length >= 1) {
          setOwnsStore(true);
          if (otherFunction && typeof otherFunction === "function") {
            if (otherFunction.length > 0) {
              otherFunction(response[0]);
            } else {
              otherFunction();
            }
          }
        }
      }
    };

    checkOwnership();
  }, []);
  return [
    ownsStore,
    loading,
    error,
    info,
    setInfo,
    setError,
    setLoading,
    setOwnsStore,
  ];
};
