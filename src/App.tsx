import React, {useEffect, useRef} from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Index from "./pages/Index";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import MainLayout from "./components/MainLayout/MainLayout";
import {MessageProvider} from "./context/MessageContext";
import StudentIndex from "./pages/student/index";
import Dashboard from "./pages/admin/Dashboard";
import Teachers from "./pages/admin/Teachers";
import Students from "./pages/admin/Students";
import Subjects from "./pages/admin/Subjects";
import DashboardStudent from "./pages/student/DashboardStudent";


function App() {
    return (
        <div>
            <AuthProvider>
                <MessageProvider>
                    <MainLayout>
                        <Routes>
                            <Route path={'/'} element={<PrivateRoute />}>
                                <Route path={'/'} element={<Index/>}/>
                                <Route path={'/admin/dashboard'} element={<Dashboard/>}/>
                                <Route path={'/student/dashboard'} element={<DashboardStudent/>}/>
                                <Route path={'/admin/teachers'} element={<Teachers/>}/>
                                <Route path={'/admin/students'} element={<Students/>}/>
                                <Route path={'/admin/subjects'} element={<Subjects/>}/>
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
