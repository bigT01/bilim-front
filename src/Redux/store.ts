import { configureStore } from "@reduxjs/toolkit";
import {StudentReducer} from "./slices/students";
import {AuthReducer} from "./slices/auth";

const store = configureStore({
    reducer: {
        students: StudentReducer,
        auth: AuthReducer
    },
});

export default store;