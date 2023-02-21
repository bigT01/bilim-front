import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchSubjectStudents = createAsyncThunk<{}, {}, any>('subjects/fetchSubjectsStudents', async ({id}:any) => {
    const {data} = await axios.get(`/subject/${id}/students`);
    return data
})



const initialState = {
    subjectStudents: {
        items:
            {
                id: "COURSE1",
                students: [
                    '1', '9', '4'
                ]
            },
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
        // // @ts-ignore
        // [fetchRemoveSubjects.pending] : (state:any, action:any) =>{
        //     state.subjects.items = state.subjects.items.filter((elem: any) => elem.id !== action.meta.arg)
        //     state.subjects.status = 'loading'
        // },
        // // @ts-ignore
        // [fetchRemoveSubjects.fulfilled] : (state:any) =>{
        //     state.subjects.status = 'loaded';
        // },
        // // @ts-ignore
        // [fetchRemoveSubjects.rejected] : (state:any) =>{
        //     state.subjects.status = 'failed';
        // },
    }
})

export const SubjectStudentReducer = SubjectStudentSlice.reducer;