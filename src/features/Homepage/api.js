import { get } from "../../app/axiosWrapper"

export const allWatches = async (page, limit) => {
    const url = `watches?page=${page}&limit=${limit}`
    return get(url)
}