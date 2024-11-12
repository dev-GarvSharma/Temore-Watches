import { get } from "../../../app/axiosWrapper"

export const userDetails = async () => {
    const url = `auth/login`
    return get(url)
}