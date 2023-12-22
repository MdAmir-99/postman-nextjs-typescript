"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMainContext } from "@/context/MainContext";
import { useToast } from "@/components/ui/use-toast";
import checkValidParams, {
  getParamsAndHeaderData,
} from "@/utils/checkValidParams";
import useApi from "@/hooks/useApi";
import { useEffect } from "react";
import {useApiContext} from "@/context/ApiContext";

export default function InputWithButton() {
  const {
    formData,
    setFormData,
    jsonData,
    headerData,
    paramsData,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  }=useMainContext();
  
  const { toast } = useToast();
  const {apiClient}=useApi();
  const {apiError, apiData}=useApiContext();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      url: e.target?.value,
    });
  };

  useEffect(() => {
      if (error) {
        toast({
          description: "Something went wrong. Please try again.",
        });
      }
    },[apiError]);

  const clickHandler = async () => {
    error &&
      toast({
        description: errorMessage,
      });
    if (
      !checkValidParams(
        formData,
        jsonData,
        headerData,
        paramsData,
        setErrorMessage
      )
    ) {
      setError(true);
      return false;
    }
    const requestHeaders = getParamsAndHeaderData(headerData);
    const requestParams = getParamsAndHeaderData(paramsData);

    await apiClient(formData.url, {
      mathod: formData.type,
      body: jsonData,
      headers: requestHeaders,
      params: requestParams,
    });

  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Enter URL" onChange={onChangeHandler} />
      <Button type="button" onClick={clickHandler}>
        Send
      </Button>
    </div>
  );
}
