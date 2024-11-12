import { createSlice } from '@reduxjs/toolkit'
import LocalStorageService from '../../services/localstorageService'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: LocalStorageService.getUserData('access_token') ? true : false,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})


export const {
    setLoggedIn,
} = authSlice.actions


export const getLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer