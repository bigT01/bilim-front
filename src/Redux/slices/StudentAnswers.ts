import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchStudentAnswers = createAsyncThunk<{}, any, any>('lesson/fetchStudentAnswers', async (id:any) => {
    const data = '';
    return data
})

export const fetchStudentAnswersUpdate = createAsyncThunk<{}, any, any>('lesson/fetchStudentAnswersUpdate', async (id:any) => {
    const data = '';
    return data
})

export const fetchStudentAnswersCreate = createAsyncThunk<{}, any, any>('lesson/fetchStudentAnswersCreate', async (id:any) => {
    const data = '';
    return data
})


const initialState = {
    StudentAnswers: {
        items:[],
        status: 'loading'
    }
}

const StudentAnswersSlice = createSlice({
    name: 'StudentAnswers',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchStudentAnswers.pending] : (state:any) =>{
            state.StudentAnswers.status = 'loading'
        },
        // @ts-ignore
        [fetchStudentAnswers.fulfilled] : (state:any, action:any) =>{
            state.StudentAnswers.items = action.payload;
            state.StudentAnswers.status = 'loaded';
        },
        // @ts-ignore
        [fetchStudentAnswers.rejected] : (state:any) =>{
            state.StudentAnswers.status = 'failed';
        },
        // @ts-ignore
        [fetchStudentAnswersCreate.pending] : (state:any) =>{
            state.StudentAnswers.status = 'loading'
        },
        // @ts-ignore
        [fetchStudentAnswersCreate.fulfilled] : (state:any, action:any) =>{
             if (state.StudentAnswers.items[0]){
                 const filtered = state.StudentAnswers.items.filter((item:any) => item.id === action.meta.arg.id)
                 if (filtered[0]){
                     state.StudentAnswers.items = state.StudentAnswers.items.map((item:any) => {
                         if(item.id === action.meta.arg.id){
                             return {id: action.meta.arg.id, value: action.meta.arg.value}
                         }
                         else{
                             return item
                         }
                     });
                 }
                 else{
                     state.StudentAnswers.items.push({id: action.meta.arg.id, value: action.meta.arg.value})
                 }
             }
             else{
                 state.StudentAnswers.items = [{id: action.meta.arg.id, value: action.meta.arg.value}]
             }

            state.StudentAnswers.status = 'loaded';
        },
        // @ts-ignore
        [fetchStudentAnswersCreate.rejected] : (state:any) =>{
            state.StudentAnswers.status = 'failed';
        },
        // @ts-ignore
        [fetchStudentAnswersUpdate.pending] : (state:any) =>{
            state.StudentAnswers.status = 'loading'
        },
        // @ts-ignore
        [fetchStudentAnswersUpdate.fulfilled] : (state:any, action:any) =>{
            state.StudentAnswers.items = [];
            state.StudentAnswers.status = 'loaded';
        },
        // @ts-ignore
        [fetchStudentAnswersUpdate.rejected] : (state:any) =>{
            state.StudentAnswers.status = 'failed';
        },
    }
})

export const StudentAnswersReducer = StudentAnswersSlice.reducer;