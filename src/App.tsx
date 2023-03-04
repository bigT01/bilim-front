import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Index from "./pages/Index";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import MainLayout from "./components/MainLayout/MainLayout";
import {MessageProvider} from "./context/MessageContext";
import Dashboard from "./pages/admin/Dashboard";
import Teachers from "./pages/admin/Teachers";
import Students from "./pages/admin/Students";
import Subjects from "./pages/admin/Subjects";
import DashboardStudent from "./pages/student/DashboardStudent";
import SubjectStudent from "./pages/student/SubjectStudent";
import SubjectCardStudent from "./pages/student/SubjectCardStudent";
import StudentsCard from "./pages/admin/StudentsCard";
import SubjectAddUser from "./pages/admin/SubjectAddUser";
import SubjectsItem from "./pages/admin/subject/SubjectsItem";
import AddLesson from "./pages/admin/subject/AddLesson";
import AddQuiz from "./pages/admin/subject/addQuiz";
import CreateStudent from "./components/AdminStudent/StudentCard/CreateStudent";
import AddSubject from "./pages/admin/subject/AddSubject";
import UpdateLesson from "./pages/admin/subject/UpdateLesson";


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
                                <Route path={'/admin/teachers'} element={<Teachers/>}/>
                                <Route path={'/admin/students'} element={<Students/>}/>
                                <Route path={'/admin/students/:id'} element={<StudentsCard/>}/>
                                <Route path={'/admin/subjects'} element={<Subjects/>}/>
                                <Route path={'/admin/subjects/addSubject'} element={<AddSubject/>}/>
                                <Route path={'/admin/subjects/:id'} element={<SubjectsItem/>}/>
                                <Route path={'/admin/subject/:id/addLesson'} element={<AddLesson/>}/>
                                <Route path={'/admin/subjects/updateLesson/:id'} element={<UpdateLesson/>}/>
                                <Route path={'/admin/subjects/quiz/:quizId'} element={<AddQuiz/>}/>
                                <Route path={'/admin/subjects/:id/adduser'} element={<SubjectAddUser/>}/>
                                <Route path={'/admin/students/createStudent'} element={<CreateStudent/>}/>

                                <Route path={'/student/dashboard'} element={<DashboardStudent/>}/>
                                <Route path={'/student/subject'} element={<SubjectStudent/>}/>

                                <Route path={'/student/subject/:id'} element={<SubjectCardStudent/>}/>

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
