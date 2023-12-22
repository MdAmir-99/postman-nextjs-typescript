"use client";
import {createContext,useContext,useState} from "react"

interface IApiContextType {
    apiData: object[]|object|string,
    setApiData: React.Dispatch<React.SetStateAction<object[]|object|string>>,
    apiError: string,
    setApiError: React.Dispatch<React.SetStateAction<string>>,
    apiLoading: boolean,
    setApiLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const ApiContext=createContext<IApiContextType>({
    apiData: {},
    setApiData: () => {},
    apiError: "",
    setApiError: () => {},
    apiLoading: false,
    setApiLoading: () => {},
})

export const ApiContextProvider=({children}: any) => {
    const [apiData,setApiData]=useState<object[]|object|string>([]);
    const [apiError,setApiError]=useState("");
    const [apiLoading,setApiLoading]=useState(false);

    const contextValue={
        apiData,
        setApiData,
        apiError,
        setApiError,
        apiLoading,
        setApiLoading
    }
    return (
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    );
}

export const useApiContext=() => useContext(ApiContext);