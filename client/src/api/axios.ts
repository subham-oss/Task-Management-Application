import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Automatically refresh expired access token
api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {

   const originalRequest = error.config as typeof error.config & {
      _retry?: boolean;
    };

    // Access token expired
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/generate-token")
    ) {
      originalRequest._retry = true;

      try {
        // Browser automatically sends HttpOnly refreshToken cookie
        const response = await api.post("/api/user/generate-token");

        const newAccessToken = response.data.accessToken;

        // Save new access token
        localStorage.setItem("accessToken", newAccessToken);

        // Put new token into original request
        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        // Retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token is invalid/expired
        localStorage.removeItem("accessToken");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;