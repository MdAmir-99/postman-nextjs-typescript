import {isValidJson} from "./isValidJson";

export default function checkValidParams(formData,jsonData,headerData,paramData,setErrorMessage) {
    if(!formData.url) {
        setErrorMessage('Invalid url');
        return false;
    }
    if(!isValidJson(JSON.stringify(jsonData))) {
        setErrorMessage('Invalid JSON format');
        return false
    }


    return true;
}

type objectType={
    id?: number;
    key?: string;
    value?: string;
    check?: boolean
}

export function getParamsAndHeaderData(data: objectType[]|[]) {
    return data.reduce((op,obj) => {
        if(obj.hasOwnProperty('key')&&obj.hasOwnProperty('value')&&obj['check']) {
            const key=obj['key'];
            const value=obj['value'];
            op[key]=value;
        }
        return op;
    },{})
}