const jsonRegex=/^[\],:{}\s]*$|^".*?"(?:\s*:\s*".*?"(?:\s*,\s*".*?")*|\s*,\s*(?=[\],}]))*|^'.*?'(?:\s*:\s*'.*?'(?:\s*,\s*'.*?')*|\s*,\s*(?=[\],}]))*|^[0-9]+(?:\.[0-9]*)?(?:[eE][+\-]?[0-9]+)?$|^\[.*\]$|^\{.*\}$/


export const isValidJson=(data: any) => {
    if(!jsonRegex.test(data)) {
        return false;
    }
    return true;
}