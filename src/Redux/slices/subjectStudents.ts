import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";


export const fetchSubjectStudents = createAsyncThunk<{}, string, any>('subjects/fetchSubjectsStudents', async (id:string) => {
    const {data} = await axios.get(`/course/${id}/user`);
    return data
})

export const fetchSubjectAddStudents = createAsyncThunk<{}, any, any>('subjects/fetchSubjectsAddStudents', async (params:any) => {
    const {data} = await axios.put(`/course/${params.id}/user`, {
        students: params.students
    });

    return data
})



const initialState = {
    subjectStudents: {
        items: [],
        status: 'loading'
    }
}

const SubjectStudentSlice = createSlice({
    name: 'subjectStudents',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchSubjectStudents.pending] : (state:any) =>{
            state.subjectStudents.status = 'loading'
        },
        // @ts-ignore
        [fetchSubjectStudents.fulfilled] : (state:any, action:any) =>{
            state.subjectStudents.items = action.payload;
            state.subjectStudents.status = 'loaded';
        },
        // @ts-ignore
        [fetchSubjectStudents.rejected] : (state:any) =>{
            state.subjectStudents.status = 'failed';
        },
        // @ts-ignore
        [fetchSubjectAddStudents.pending] : (state:any) =>{
            state.subjectStudents.status = 'loading'
        },
        // @ts-ignore
        [fetchSubjectAddStudents.fulfilled] : (state:any, action:any) =>{
            const students:any = []
            action.meta.arg.students.map((item:any) => students.push({student_id: item}))
            state.subjectStudents.items = students

            state.subjectStudents.status = 'loaded';
            message.success('участники успешно добавлены')
        },
        // @ts-ignore
        [fetchSubjectAddStudents.rejected] : (state:any) =>{
            state.subjectStudents.status = 'failed';
        },
    }
})

export const SubjectStudentReducer = SubjectStudentSlice.reducer;