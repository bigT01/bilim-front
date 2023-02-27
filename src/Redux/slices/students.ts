import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchStudents = createAsyncThunk<{}, {}, any>('students/fetchStudents', async () => {
    const {data} = await axios.get('/user');
    return data
})


export const fetchRemoveStudent = createAsyncThunk<{}, {}, any>('students/fetchRemoveStudent', async ({id}:any) => {
    // const {data} = await axios.delete(`/user/${id}`)
    return id
})


const initialState = {
    students: {
        items:[],
        status: 'loading'
    }
}

const StudentSlice = createSlice({
    name: 'students',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchStudents.pending] : (state:any) =>{
            state.students.status = 'loading'
        },
        // @ts-ignore
        [fetchStudents.fulfilled] : (state:any, action:any) =>{
            state.students.items = action.payload;
            state.students.status = 'loaded';
        },
        // @ts-ignore
        [fetchStudents.rejected] : (state:any) =>{
            state.students.status = 'failed';
        },
        // @ts-ignore
        [fetchRemoveStudent.pending] : (state:any, action:any) =>{
            state.students.items = state.students.items.filter((elem: any) => elem.id !== action.meta.arg)
            state.students.status = 'loading'
        },
        // @ts-ignore
        [fetchRemoveStudent.fulfilled] : (state:any) =>{
            state.students.status = 'loaded';
        },
        // @ts-ignore
        [fetchRemoveStudent.rejected] : (state:any) =>{
            state.students.status = 'failed';
        },
    }
})

export const SelectRemoveStudent = ({state}: any) => Boolean(state?.auth?.data)

export const StudentReducer = StudentSlice.reducer;