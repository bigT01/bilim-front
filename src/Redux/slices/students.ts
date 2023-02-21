import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchStudents = createAsyncThunk<{}, {}, any>('students/fetchStudents', async () => {
    const {data} = await axios.get('/students');
    return data
})

export const fetchRemoveStudent = createAsyncThunk<{}, {}, any>('students/fetchRemoveStudent', async ({id}:any) => {
    const {data} = await axios.delete(`/student/${id}`);
    return data
})


const initialState = {
    students: {
        items:[
            {
                id: '0',
                name: "Azan Tanat",
                age: 18,
                grade: "9 a",
                rating: 10,
                avgGrade: 67,
            },
            {
                id: '1',
                name: 'John',
                age: 25,
                grade: 'A',
                rating: 4,
                avgGrade: 85,
            },
            {
                id: '2',
                name: 'Jane',
                age: 30,
                grade: 'B',
                rating: 3,
                avgGrade: 78,
            },
            {
                id: '3',
                name: 'Bob',
                age: 22,
                grade: 'C',
                rating: 2,
                avgGrade: 65,
            },
            {
                id: '4',
                name: 'Alice',
                age: 27,
                grade: 'A',
                rating: 5,
                avgGrade: 91,
            },
            {
                id: '5',
                name: 'Mark',
                age: 24,
                grade: 'B',
                rating: 4,
                avgGrade: 80,
            },
            {
                id: '6',
                name: 'Karen',
                age: 28,
                grade: 'C',
                rating: 2,
                avgGrade: 69,
            },
            {
                id: '7',
                name: 'Tom',
                age: 26,
                grade: 'A',
                rating: 5,
                avgGrade: 89,
            },
            {
                id: '8',
                name: 'Emily',
                age: 23,
                grade: 'B',
                rating: 4,
                avgGrade: 82,
            },
            {
                id: '9',
                name: 'Alex',
                age: 29,
                grade: 'C',
                rating: 3,
                avgGrade: 72,
            },
            {
                id: '10',
                name: 'Sara',
                age: 21,
                grade: 'A',
                rating: 5,
                avgGrade: 92,
            }
        ],
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
        }
    }
})

export const SelectRemoveStudent = ({state}: any) => Boolean(state?.auth?.data)

export const StudentReducer = StudentSlice.reducer;