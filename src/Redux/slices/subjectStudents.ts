import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchSubjectStudents = createAsyncThunk<{}, {}, any>('subjects/fetchSubjectsStudents', async ({id}:any) => {
    const {data} = await axios.get(`/subject/${id}/students`);
    return data
})



const initialState = {
    subjectStudents: {
        items: [
            {
                id: "COURSE1",
                students: [
                    {id: '1',},
                    {id: '8'},
                    {id: '0'}
                ]
            },
            {
                id: "COURSE2",
                students: [
                    {id: '5',},
                    {id: '4'},
                    {id: '6'}
                ]
            },
            {
                id: "COURSE3",
                students: [
                    {id: '3',},
                    {id: '5'},
                    {id: '10'}
                ]
            },
            {
                id: "COURSE4",
                students: [
                    {id: '1',},
                    {id: '2'},
                    {id: '3'}
                ]
            },
            {
                id: "COURSE5",
                students: [
                    {id: '9',},
                    {id: '7'},
                    {id: '6'}
                ]
            },
            {
                id: "COURSE6",
                students: [
                    {id: '1',},
                    {id: '8'},
                    {id: '0'}
                ]
            },
            {
                id: "COURSE7",
                students: [
                    {id: '5',},
                    {id: '4'},
                    {id: '6'}
                ]
            },
            {
                id: "COURSE8",
                students: [
                    {id: '3',},
                    {id: '5'},
                    {id: '10'}
                ]
            },
            {
                id: "COURSE9",
                students: [
                    {id: '1',},
                    {id: '2'},
                    {id: '3'}
                ]
            },
            {
                id: "COURSE10",
                students: [
                    {id: '9',},
                    {id: '7'},
                    {id: '6'}
                ]
            },

        ],
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