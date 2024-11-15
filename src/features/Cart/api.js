import { get, post, put } from "../../app/axiosWrapper"

export const getCartData = async (id) => {
    const url = `cart/${id}`
    return await get(url)
}

export const updateCartData = async (id, data) => {
    const url = `cart/${id}`
    return await put(url, data)
}