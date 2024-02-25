import globalAxios from "axios";

export const axios = globalAxios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}`,
});

axios.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem(
      process.env.REACT_APP_CURRENTUSER_LOCAL_KEY
    );
    const parsed = user ? JSON.parse(user) : undefined;
    const token = parsed?.state?.currentUser?.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
