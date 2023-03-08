import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";



export const fetchStudents = createAsyncThunk<{}, {}, any>('students/fetchStudents', async () => {
    const {data} = await axios.get('/user/student');
    return data
})

export const fetchCreateStudent = createAsyncThunk<any, any, any>('students/fetchCreateStudent', async (params:any) => {
    const {data} = await axios.post(`/user`, {
            login: params.login,
            full_name: params.full_name,
            password: params.password,
            attend : params.attend,
            role: 'student'
    })

    return data
})

export const fetchRemoveStudent = createAsyncThunk<{}, any, any>('students/fetchRemoveStudent', async (id:any) => {
    const {data} = await axios.delete(`/user/${id}`)

    return data
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
        [fetchCreateStudent.pending] : (state:any, action:any) =>{
            state.students.status = 'loading'
        },
        // @ts-ignore
        [fetchCreateStudent.fulfilled] : (state:any, action:any) =>{
            state.students.items.push(action.payload)
            state.students.status = 'created';
        },
        // @ts-ignore
        [fetchCreateStudent.rejected] : (state:any) =>{
            state.students.status = 'failed';
        },
        // @ts-ignore
        [fetchRemoveStudent.pending] : (state:any) =>{
            state.students.status = 'loading'
        },
        // @ts-ignore
        [fetchRemoveStudent.fulfilled] : (state:any, action:any) =>{
            message.success('успешно удално')
            state.students.items = state.students.items.filter((elem: any) => elem.id !== action.meta.arg)
            state.students.status = 'loaded';
        },
        // @ts-ignore
        [fetchRemoveStudent.rejected] : (state:any, action:any) =>{
            if(action.error.message === 'Request failed with status code 503'){
                message.error('этот ученик состоит в курсе')
            }else{
                message.error('ошибка сервера')
            }

            state.students.status = 'failed';
        },
    }
})

export const SelectRemoveStudent = ({state}: any) => Boolean(state?.auth?.data)

export const StudentReducer = StudentSlice.reducer;