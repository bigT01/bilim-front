import { configureStore } from "@reduxjs/toolkit";
import {StudentReducer} from "./slices/students";
import {AuthReducer} from "./slices/auth";
import {SubjectsReducer} from "./slices/subject";
import SearchReducer from "./reducer/searchReducer";
import {SubjectStudentReducer} from "./slices/subjectStudents";
import {LessonsReducer} from "./slices/lessons";
import {QuizReducer} from "./slices/quiz";
import {QuestionReducer} from "./slices/questions";

const store = configureStore({
    reducer: {
        students: StudentReducer,
        subjects: SubjectsReducer,
        auth: AuthReducer,
        subjectStudents: SubjectStudentReducer,
        subjectLessons: LessonsReducer,
        quiz: QuizReducer,
        question: QuestionReducer,
        search: SearchReducer
    },
});

export default store;