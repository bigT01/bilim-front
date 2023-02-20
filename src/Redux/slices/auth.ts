import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk<{}, {}, any>('auth/fetchData', async ({params}:any) => {
    const {data} = await axios.get('/auth/login', params);
    return data
})

const initialState = {
    data: null,
    status: 'loading'
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchAuth.pending] : (state:any) =>{
            state.data = null
            state.status = 'loading'
        },
        // @ts-ignore
        [fetchAuth.fulfilled] : (state:any, action:any) =>{
            state.data = action.payload
            state.status = 'loaded'
        },
        // @ts-ignore
        [fetchAuth.rejected] : (state:any) =>{
            state.status = 'failed'
            state.data = null
        }
    }
})

export const SelectIsAuth = ({state}: any) => Boolean(state?.auth?.data)

export const AuthReducer = AuthSlice.reducer;