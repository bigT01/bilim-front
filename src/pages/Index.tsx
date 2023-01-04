import {UseAuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";

const Index = () =>{
    const {role} = UseAuthContext()

    if(role === 'admin'){
        return <Navigate to={'/admin/dashboard'} />
    }
    if(role === 'student'){
        return <Navigate to={'/student'} />
    }
    if(role === 'teacher'){
        return <Navigate to={'/teacher'} />
    }
    else{
        return <Navigate to={'/login'} />
    }
}

export default Index