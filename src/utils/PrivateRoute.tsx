import {Navigate, Outlet} from "react-router-dom";
import {UseAuthContext} from '../context/AuthContext';

const PrivateRoute= ({...rest}) =>{
    const {isAuth} = UseAuthContext()

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute