import { get } from "../../app/axiosWrapper"

export const watchDetails = async (id) => {
    const url = `watches/${id}`
    return await get(url)
}