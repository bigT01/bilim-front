import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchQuiz = createAsyncThunk<{}, any, any>('lesson/fetchQuiz', async (id:any) => {
    const {data} = await axios.get(`/quiz/${id}`);
    return data
})

export const fetchSaveQuiz = createAsyncThunk<{}, any, any>('lesson/fetchSaveQuiz', async (params:any) => {
    const {data} = await axios.put(`/quiz/${params.id}`, {
        title: params.title,
        total_points: 100,
        is_active: false
    });
    return data
})

export const fetchDeleteQuiz = createAsyncThunk<{}, any, any>('lesson/fetchDeleteQuiz', async (id:any) => {
    const {data} = await axios.delete(`/quiz/${id}`);
    return data
})

export const fetchUpdateQuiz = createAsyncThunk<{}, any, any>('lesson/fetchUpdateQuiz', async () => {
    const data = 'data';
    return data
})

const initialState = {
    quiz: {
        items:{},
        status: 'loading'
    }
}

const QuizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchQuiz.pending] : (state:any) =>{
            state.quiz.status = 'loading'
        },
        // @ts-ignore
        [fetchQuiz.fulfilled] : (state:any, action:any) =>{
            state.quiz.items = action.payload;
            state.quiz.status = 'loaded';
        },
        // @ts-ignore
        [fetchQuiz.rejected] : (state:any) =>{
            state.quiz.status = 'failed';
        },
        // @ts-ignore
        [fetchSaveQuiz.pending] : (state:any) =>{
            state.quiz.status = 'loading'
        },
        // @ts-ignore
        [fetchSaveQuiz.fulfilled] : (state:any, action:any) =>{
            state.quiz.items.title = action.meta.arg.title
            state.quiz.status = 'loaded';
            message.success(action.payload.message)
        },
        // @ts-ignore
        [fetchSaveQuiz.rejected] : (state:any, action:any) =>{
            state.quiz.status = 'failed';
            message.error('ошибка сервера')
        },
        // @ts-ignore
        [fetchDeleteQuiz.pending] : (state:any) =>{
            state.quiz.status = 'loading'
        },
        // @ts-ignore
        [fetchDeleteQuiz.fulfilled] : (state:any, action:any) =>{
            state.quiz.items = {};
            state.quiz.status = 'deleted';
            message.success(action.payload.message)
        },
        // @ts-ignore
        [fetchDeleteQuiz.rejected] : (state:any) =>{
            state.quiz.status = 'failed';
            message.error('ошибка сервера')
        },
        // @ts-ignore
        [fetchUpdateQuiz.pending] : (state:any) =>{
            state.quiz.status = 'loading'
        },
        // @ts-ignore
        [fetchUpdateQuiz.fulfilled] : (state:any) =>{
            state.quiz.items = {};
            state.quiz.status = 'loading';
        },
        // @ts-ignore
        [fetchUpdateQuiz.rejected] : (state:any) =>{
            state.quiz.status = 'failed';
        },
    }
})

export const QuizReducer = QuizSlice.reducer;