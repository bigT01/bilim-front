import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";
import MainLayout from "./components/MainLayout";
import {MessageProvider} from "./context/MessageContext";


function App() {
    return (
        <div>
            <AuthProvider>
                <MessageProvider>
                    <MainLayout>
                        <Routes>
                            <Route path={'/'} element={<PrivateRoute />}>
                                <Route path={'/'} element={<Home/>}/>
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
