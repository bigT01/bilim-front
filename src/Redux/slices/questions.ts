import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchQuestion = createAsyncThunk<{}, any, any>('lesson/fetchQuestion', async (id:any) => {
    const {data} = await axios.get(`${id}/question`);
    return data
})

export const fetchCreateQuestion = createAsyncThunk<{}, any, any>('lesson/fetchCreateQuestion', async (id:any) => {
    const {data} = await axios.post(`/quiz/${id}/question`);
    return data
})


const initialState = {
    question: {
        items:[],
        status: 'loading'
    }
}

const QuestionSlice = createSlice({
    name: 'question',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchQuestion.pending] : (state:any) =>{
            state.question.status = 'loading'
        },
        // @ts-ignore
        [fetchQuestion.fulfilled] : (state:any, action:any) =>{
            state.question.items = action.payload;
            state.question.status = 'loaded';
        },
        // @ts-ignore
        [fetchQuestion.rejected] : (state:any) =>{
            state.question.status = 'failed';
        },
        // @ts-ignore
        [fetchCreateQuestion.pending] : (state:any) =>{
            state.question.status = 'loading'
        },
        // @ts-ignore
        [fetchCreateQuestion.fulfilled] : (state:any, action:any) =>{
            state.question.items.push(action.payload);
            state.question.status = 'loaded';
            message.success('вопрос был успешно создано')
        },
        // @ts-ignore
        [fetchCreateQuestion.rejected] : (state:any) =>{
            state.question.status = 'failed';
            message.error('не удалось создать вопрос')
        },
    }
})

export const QuestionReducer = QuestionSlice.reducer;