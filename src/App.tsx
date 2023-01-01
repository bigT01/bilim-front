import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Index from "./pages/Index";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import MainLayout from "./components/MainLayout/MainLayout";
import {MessageProvider} from "./context/MessageContext";
import AdminIndex from "./pages/admin/index";
import TeacherIndex from "./pages/teacher/index";
import StudentIndex from "./pages/student/index";


function App() {
    return (
        <div>
            <AuthProvider>
                <MessageProvider>
                    <MainLayout>
                        <Routes>
                            <Route path={'/'} element={<PrivateRoute />}>
                                <Route path={'/'} element={<Index/>}/>
                                <Route path={'/admin'} element={<AdminIndex/>}/>
                                <Route path={'/teacher'} element={<TeacherIndex/>}/>
                                <Route path={'/student'} element={<StudentIndex/>}/>
                            </Route>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </MainLayout>
                </MessageProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
