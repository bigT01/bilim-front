import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import {message} from "antd";

export const fetchSubjects = createAsyncThunk<{}, {}, any>('subjects/fetchSubjects', async () => {
    const {data} = await axios.get('/course');
    return data
})


export const fetchRemoveSubjects = createAsyncThunk<{}, any, any>('subjects/fetchRemoveSubjects', async (id:any) => {
    const {data} = await axios.delete(`/course/${id}`);
    return data
})



const initialState = {
    subjects: {
        items: [],
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
            message.success('успешно удално')
            state.subjects.status = 'loaded';
        },
        // @ts-ignore
        [fetchRemoveSubjects.rejected] : (state:any, action:any) =>{
            if(action.error.message === 'Request failed with status code 503'){
                message.error('этот ученик состоит в курсе')
            }else{
                message.error('ошибка сервера')
            }
            state.subjects.status = 'failed';
        },

    }
})

export const SubjectsReducer = SubjectsSlice.reducer;