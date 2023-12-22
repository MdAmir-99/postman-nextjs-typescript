import { useApiContext } from "@/context/ApiContext";
import axios, { AxiosResponse } from "axios";
import React from "react";

type ApiResponse<T = any> = {
  data: T;
  status?: boolean;
  message?: string;
};

const useApi = () => {
  const {
    apiData,
    setApiData,
    apiError,
    setApiError,
    apiLoading,
    setApiLoading,
  } = useApiContext();

  const apiClient = async <T = any,>(url: string, options: any = {}) => {
    setApiLoading(true);
    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios(url, {
        ...options,
        withCredentials: true,
      });

      if (response.data) {
        setApiData(response.data);
        setApiError("");
        setApiLoading(false);
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        setApiError(
          status >= 400 && data.message ? data.message : "Something went wrong"
        );
      } else {
        setApiError("Something went wrong");
      }

      setApiData([]);
      setApiLoading(false);
    }
  };
  return { apiClient };
};

export default useApi;
