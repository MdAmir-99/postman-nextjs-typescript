"use client";
import React from "react";
import ErrorScreen from "../ErrorScreen";
import Response from "../Response";
import { useApiContext } from "@/context/ApiContext";

const ResponseSection = () => {
  const { apiError, apiData } = useApiContext();
  return apiError ? <ErrorScreen /> : <Response data={apiData} />;
};

export default ResponseSection;
