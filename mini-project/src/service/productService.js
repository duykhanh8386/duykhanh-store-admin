import { del, get, patch, post } from "../utils"

export const getListProduct = async()=>{
    const result = await get("product");
    return result;
}
export const deleteItem = async(id)=>{
    const result = await del(`product/${id}`);
    return result;
}
export const updateProduct = async(id,option)=>{
    const result = await patch(`product/${id}`,option);
    return result;
}
export const createProduct = async(value)=>{
    const result = await post("product", value);
    return result;
}
