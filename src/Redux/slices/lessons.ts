import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSubjectLesson = createAsyncThunk<{}, {}, any>('lesson/fetchLessons', async ({id}:any) => {
    const {data} = await axios.get(`/subject/${id}`);
    return data
})

export const fetchRemoveLesson = createAsyncThunk<{}, {}, any>('lesson/fetchRemoveLessons', async ({id}:any) => {
    const {data} = await axios.delete(`/subject/${id}/lesson`);
    return data
})


const initialState = {
    lessons: {
        items:[
            {
                id: 1,
                name: "Introduction to HTML",
                addedTime: "2022-08-02T08:30:00.000Z"
            },
            {
                id: 2,
                name: "CSS Basics",
                addedTime: "2022-09-15T14:45:00.000Z"
            },
            {
                id: 3,
                name: "JavaScript Fundamentals",
                addedTime: "2022-10-10T09:15:00.000Z"
            },
            {
                id: 4,
                name: "React Components",
                addedTime: "2022-11-05T11:30:00.000Z"
            },
            {
                id: 5,
                name: "Node.js Basics",
                addedTime: "2022-12-01T16:00:00.000Z"
            },
            {
                id: 6,
                name: "Database Design",
                addedTime: "2023-01-10T10:15:00.000Z"
            },
            {
                id: 7,
                name: "Python Programming",
                addedTime: "2023-02-01T14:30:00.000Z"
            },
            {
                id: 8,
                name: "API Development",
                addedTime: "2023-03-03T09:45:00.000Z"
            },
            {
                id: 9,
                name: "Mobile App Development",
                addedTime: "2023-04-02T13:00:00.000Z"
            },
            {
                id: 10,
                name: "Machine Learning",
                addedTime: "2023-05-01T11:15:00.000Z"
            }
        ],
        status: 'loading'
    }
}

const LessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers:{},
    extraReducers:{
        // @ts-ignore
        [fetchSubjectLesson.pending] : (state:any) =>{
            state.lessons.status = 'loading'
        },
        // @ts-ignore
        [fetchSubjectLesson.fulfilled] : (state:any, action:any) =>{
            state.lessons.items = action.payload;
            state.lessons.status = 'loaded';
        },
        // @ts-ignore
        [fetchSubjectLesson.rejected] : (state:any) =>{
            state.lessons.status = 'failed';
        },
        // @ts-ignore
        [fetchRemoveLesson.pending] : (state:any, action:any) =>{
            state.lessons.items = state.lessons.items.filter((elem: any) => elem.id !== action.meta.arg)
            state.lessons.status = 'loading'
        },
        // @ts-ignore
        [fetchRemoveLesson.fulfilled] : (state:any) =>{
            state.lessons.status = 'loaded';
        },
        // @ts-ignore
        [fetchRemoveLesson.rejected] : (state:any) =>{
            state.lessons.status = 'failed';
        }
    }
})

export const SelectRemoveStudent = ({state}: any) => Boolean(state?.auth?.data)

export const LessonsReducer = LessonsSlice.reducer;