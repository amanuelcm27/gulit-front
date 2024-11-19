import { useEffect } from "react";

import { api } from "./api";

export const getAuthUser = async () => {
  const response = await api.get("get_user/");
  return response;
};

export async function getCsrfToken() {
  const response = await api.get("csrf-token/");
  return response.data.csrfToken;
}
export async function login(email, password) {
  const csrfToken = await getCsrfToken();
  return api.post(
    "login/",
    { email, password },
    {
      headers: {
        "X-CSRFToken": csrfToken,
      },
    }
  );
}
export async function logout() {
  const csrfToken = await getCsrfToken();
  return api.post(
    "logout/",
    {},
    {
      headers: {
        "X-CSRFToken": csrfToken,
      },
    }
  );
}
export async function signWithGoogle(googleToken) {
  const csrfToken = await getCsrfToken();
  return api.post(
    "sign_with_google/",
    {
      token: googleToken,
    },
    {
      headers: {
        "X-CSRFToken": csrfToken,
      },
    }
  );
}
export async function register(registerInfo) {
  const csrfToken = await getCsrfToken();
  return api.post(
    "register/",
    {
      registerInfo: registerInfo,
    },
    {
      headers: {
        "X-CSRFToken": csrfToken,
      },
    }
  );
}
