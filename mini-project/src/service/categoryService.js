import { get } from "../utils"

export const getCategory = async ()=>{
    const result = await get("category");
    return result;
}