import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchSubjectLesson = createAsyncThunk<{}, any, any>('lesson/fetchLessons', async (id:any) => {
    const {data} = await axios.get(`/course/${id}`);
    return data
})

export const fetchRemoveLesson = createAsyncThunk<{}, {}, any>('lesson/fetchRemoveLessons', async ({id}:any) => {
    const {data} = await axios.delete(`/subject/${id}/lesson`);
    return data
})


const initialState = {
    lessons: {
        items:[],
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