export const isEqualObj = (arrayOfObj, newObj) => {
    return arrayOfObj.find(obj => obj.title === newObj.title 
                         && obj.content === newObj.content);
}