import { post } from "../../app/axiosWrapper"

export const login = async (data) => {
    const url = `auth/login`
    return post(url, data)
}

export const register = async (data) => {
    const url = `auth/signup`
    return post(url, data)
}