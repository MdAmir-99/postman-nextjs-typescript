"use client";
import React,{createContext,useContext,useState} from "react"

type FormData={
    type: string,
    url: string
}

interface IMainContextType {
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>,
    paramsData: []|any,
    setParamsData: React.Dispatch<React.SetStateAction<[] | any>>,
    headerData: []|any,
    setHeaderData: React.Dispatch<React.SetStateAction<[]|any>>,
    jsonData: string,
    setJsonData: React.Dispatch<React.SetStateAction<string>>,
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    errorMessage: string,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
}

const MainContext=createContext<IMainContextType>({
    formData: {
        type: "POST",
        url : ""
    },
    setFormData: () => {},
    paramsData: [],
    setParamsData: () => {},
    headerData: [],
    setHeaderData: () => {},
    jsonData: "",
    setJsonData: () => {},
    error: false,
    setError: () => {},
    errorMessage: "",
    setErrorMessage: () => {}
})


export const MainContextProvider=({children}:any) => {

    const [formData,setFormData]=useState<FormData>({
        type:"POST",
        url: ""
    });

    const [paramsData, setParamsData]=useState([]);
    const [headerData, setHeaderData]=useState([]);
    const [jsonData,setJsonData]=useState("");
    const [error,setError]=useState(false);
    const [errorMessage,setErrorMessage]=useState("");

    const contextValue={
        formData,
        setFormData,
        paramsData,
        setParamsData,
        headerData,
        setHeaderData,
        jsonData,
        setJsonData,
        error,
        setError,
        errorMessage,
        setErrorMessage
    }
    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}

export const useMainContext = () => useContext(MainContext);