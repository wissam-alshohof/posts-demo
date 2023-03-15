const isValid = (obj) => {
    for(let k of Object.keys(obj)) {
        if(obj[k]) {
            continue;
        }
        return false;
    }
    return true;
}

export const  ObjectUtils = {isValid};