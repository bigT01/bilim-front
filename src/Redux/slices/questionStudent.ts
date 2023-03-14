import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchStudentQuestion = createAsyncThunk<{}, any, any>('lesson/fetchStudentQuestion', async (id:any) => {
    const {data} = await axios.get(`/quiz/${id}/question/`);
    return data
})


const initialState = {
    StudentQuestion: {
        items:[],
        status: 'loading'
    }
}

const StudentQuestionSlice = createSlice({
    name: 'StudentQuestion',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchStudentQuestion.pending] : (state:any) =>{
            state.StudentQuestion.status = 'loading'
        },
        // @ts-ignore
        [fetchStudentQuestion.fulfilled] : (state:any, action:any) =>{
            state.StudentQuestion.items = action.payload;
            state.StudentQuestion.status = 'loaded';
        },
        // @ts-ignore
        [fetchStudentQuestion.rejected] : (state:any) =>{
            state.StudentQuestion.status = 'failed';
        },
    }
})

export const StudentQuestionReducer = StudentQuestionSlice.reducer;