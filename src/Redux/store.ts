import { configureStore } from "@reduxjs/toolkit";
import {StudentReducer} from "./slices/students";
import {AuthReducer} from "./slices/auth";
import {SubjectsReducer} from "./slices/subject";
import SearchReducer from "./reducer/searchReducer";
import {SubjectStudentReducer} from "./slices/subjectStudents";

const store = configureStore({
    reducer: {
        students: StudentReducer,
        subjects: SubjectsReducer,
        auth: AuthReducer,
        subjectStudents: SubjectStudentReducer,
        search: SearchReducer
    },
});

export default store;