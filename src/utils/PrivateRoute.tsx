import {Navigate, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

const PrivateRoute= ({...rest}) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute