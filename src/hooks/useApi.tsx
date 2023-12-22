import {useApiContext} from '@/context/ApiContext';
import axios from 'axios';
import React from 'react'


const useApi = () => {
    const {apiData, setApiData, apiError, setApiError, apiLoading, setApiLoading}=useApiContext();

    const apiClient=async (url: string,options: any={}) => {
        setApiLoading(true);
        try {
            const response=await axios(url,{
                ...options,
                withCredentials:true
            });

            if(response.data) {
                setApiData(response.data);
                setApiError('');
                setApiLoading(false);
            }

        } catch (error:unknown) {
            (error?.response?.status>=400&&error?.response?.data?.message)? setApiError(error.response.data.message):setApiError("Something went wrong");
            setApiData(null);
            setApiLoading(false);
        }
    }
    return {apiClient};
}

export default useApi