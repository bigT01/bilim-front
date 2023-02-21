import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSubjects = createAsyncThunk<{}, {}, any>('subjects/fetchSubjects', async () => {
    const {data} = await axios.get('/subjects');
    return data
})

export const fetchRemoveSubjects = createAsyncThunk<{}, {}, any>('subjects/fetchRemoveSubjects', async ({id}:any) => {
    const {data} = await axios.delete(`/subjects/${id}`);
    return data
})



const initialState = {
    subjects: {
        items: [
            { id: "COURSE1", courseName: "Introduction to Computer Science", lessonsNumber: 24, studentsNumber: 156 },
            { id: "COURSE2", courseName: "Algorithms and Data Structures", lessonsNumber: 32, studentsNumber: 211 },
            { id: "COURSE3", courseName: "Web Development", lessonsNumber: 18, studentsNumber: 82 },
            { id: "COURSE4", courseName: "Database Management Systems", lessonsNumber: 20, studentsNumber: 103 },
            { id: "COURSE5", courseName: "Machine Learning", lessonsNumber: 28, studentsNumber: 187 },
            { id: "COURSE6", courseName: "Operating Systems", lessonsNumber: 22, studentsNumber: 134 },
            { id: "COURSE7", courseName: "Artificial Intelligence", lessonsNumber: 30, studentsNumber: 198 },
            { id: "COURSE8", courseName: "Cybersecurity", lessonsNumber: 16, studentsNumber: 72 },
            { id: "COURSE9", courseName: "Computer Networks", lessonsNumber: 26, studentsNumber: 165 },
            { id: "COURSE10", courseName: "Software Engineering", lessonsNumber: 20, studentsNumber: 121 },
        ],
        status: 'loading'
    }
}

const SubjectsSlice = createSlice({
    name: 'subjects',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchSubjects.pending] : (state:any) =>{
            state.subjects.status = 'loading'
        },
        // @ts-ignore
        [fetchSubjects.fulfilled] : (state:any, action:any) =>{
            state.subjects.items = action.payload;
            state.subjects.status = 'loaded';
        },
        // @ts-ignore
        [fetchSubjects.rejected] : (state:any) =>{
            state.subjects.status = 'failed';
        },
        // @ts-ignore
        [fetchRemoveSubjects.pending] : (state:any, action:any) =>{
            state.subjects.items = state.subjects.items.filter((elem: any) => elem.id !== action.meta.arg)
            state.subjects.status = 'loading'
        },
        // @ts-ignore
        [fetchRemoveSubjects.fulfilled] : (state:any) =>{
            state.subjects.status = 'loaded';
        },
        // @ts-ignore
        [fetchRemoveSubjects.rejected] : (state:any) =>{
            state.subjects.status = 'failed';
        },

    }
})

export const SubjectsReducer = SubjectsSlice.reducer;