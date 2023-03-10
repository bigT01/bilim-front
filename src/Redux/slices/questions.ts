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

export const fetchUpdateQuestion = createAsyncThunk<{}, any, any>('lesson/fetchUpdateQuestion', async (params:any) => {
    const {data} = await axios.put(`/question/${params.id}`, {
            question: params.question,
            options: params.options,
            correct_answer: params.correct_answer,
            type: params.type,
            photo: params.photo
    });
    return data
})

export const fetchDeleteQuestion = createAsyncThunk<{}, any, any>('lesson/fetchDeleteQuestion', async (id:any) => {
    const {data} = await axios.delete(`/question/${id}`);
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
        // @ts-ignore
        [fetchUpdateQuestion.pending] : (state:any) =>{
            state.question.status = 'loading'
        },
        // @ts-ignore
        [fetchUpdateQuestion.fulfilled] : (state:any, action:any) =>{
            state.question.items = state.question.items.map((question:any) => question.question_id === action.meta.arg.id ? {
                question_id: question.question_id,
                question: action.meta.arg.question,
                options: action.meta.arg.options,
                correct_answer: action.meta.arg.correct_answer,
                photo: action.meta.arg.photo,
                type: action.meta.arg.type,
                created_at: question.created_at,
                updated_at: question.updated_at
            } : question)
            state.question.status = 'loaded';
            message.success(action.payload.message)
        },
        // @ts-ignore
        [fetchUpdateQuestion.rejected] : (state:any) =>{
            state.question.status = 'failed';
            message.error('ошибка сервера')
        },
        // @ts-ignore
        [fetchDeleteQuestion.pending] : (state:any) =>{
            state.question.status = 'loading'
        },
        // @ts-ignore
        [fetchDeleteQuestion.fulfilled] : (state:any, action:any) =>{
            state.question.items = state.question.items.filter((elem: any) => elem.question_id !== action.meta.arg)
            message.success(action.payload.message)
            state.question.status = 'loaded';
        },
        // @ts-ignore
        [fetchDeleteQuestion.rejected] : (state:any) =>{
            state.question.status = 'failed';
            message.error('ошибка сервера')
        },
    }
})

export const QuestionReducer = QuestionSlice.reducer;