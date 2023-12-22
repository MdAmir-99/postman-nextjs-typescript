import {isValidJson} from "./isValidJson";

type FormData={
    type: string;
    url: string;
};

export default function checkValidParams(
    formData: FormData,
    jsonData: string|any,
    headerData: []|any,
    paramData: []|any,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) {
    if(!formData.url) {
        setErrorMessage("Invalid url");
        return false;
    }
    if(!isValidJson(JSON.stringify(jsonData))) {
        setErrorMessage("Invalid JSON format");
        return false;
    }

    return true;
}

type objectType={
    id?: number;
    key?: string;
    value?: string;
    check?: boolean;
};

export function getParamsAndHeaderData(data: objectType[]|[]) {
    return data.reduce((op,obj) => {
        if(
            obj.hasOwnProperty("key")&&
            obj.hasOwnProperty("value")&&
            obj["check"]
        ) {
            const key: string|undefined=obj["key"];
            const value: string|undefined=obj["value"];

            if(key!==undefined&&value!==undefined) {
                op[key]=value;
            }
        }
        return op;
    },{} as {[key: string]: string});
}
