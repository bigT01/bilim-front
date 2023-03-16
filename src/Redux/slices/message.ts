import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchMessage = createAsyncThunk<{}, any, any>('message/fetchMessage', async (params:any) => {
    const {userId, id} = params
    const {data} = await axios.get(`/student/${userId}/message/${id}`)
    return data
})

export const fetchMessageCreate = createAsyncThunk<{}, any, any>('message/fetchMessageCreate', async (params:any) => {
    const {userId, id, value} = params
    const {data} = await axios.post(`/student/${userId}/message/${id}`, {
        message_content: value
    })
    return data
})

export const fetchMessageUpdate = createAsyncThunk<{}, any, any>('message/fetchMessageUpdate', async (id:any) => {
    const data = ''
    return data
})


const initialState = {
    message: {
        items:[],
        status: 'loading'
    }
}

const MessageSlice = createSlice({
    name: 'message',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchMessage.pending] : (state:any) =>{
            state.message.status = 'loading'
        },
        // @ts-ignore
        [fetchMessage.fulfilled] : (state:any, action:any) =>{
            state.message.items = action.payload;
            state.message.status = 'loaded';
        },
        // @ts-ignore
        [fetchMessage.rejected] : (state:any) =>{
            state.message.status = 'failed';
        },
        // @ts-ignore
        [fetchMessageCreate.pending] : (state:any) =>{
            state.message.status = 'loading'
        },
        // @ts-ignore
        [fetchMessageCreate.fulfilled] : (state:any, action:any) =>{
            state.message.items.push(action.payload)
            state.message.status = 'loaded';
        },
        // @ts-ignore
        [fetchMessageCreate.rejected] : (state:any) =>{
            message.error('не удалось отправить сообщения')
            message.error('попробуйте позднее')
            state.message.status = 'failed';
        },
        // @ts-ignore
        [fetchMessageUpdate.pending] : (state:any) =>{
            state.message.status = 'loading'
        },
        // @ts-ignore
        [fetchMessageUpdate.fulfilled] : (state:any, action:any) =>{
            state.message.items = action.payload;
            state.message.status = 'loaded';
        },
        // @ts-ignore
        [fetchMessageUpdate.rejected] : (state:any) =>{
            state.message.status = 'failed';
        },
    }
})

export const MessageReducer = MessageSlice.reducer;