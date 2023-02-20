import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Auth} from "../constants/Interfaces";
import {useSelector} from "react-redux";
import {SelectIsAuth} from "../Redux/slices/auth";

type AuthProviderType = {
    children: ReactNode
}

type AuthContextType = {
    setAuth: (data:Auth) => void,
    isAuth: boolean,
    token: string,
    role: string,
}


const AuthContext = createContext({} as AuthContextType)

export const UseAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}: AuthProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [role, setRole] = useState<string>('')
    const [token, setToken] = useState<string>('')
    // const selector = useSelector(SelectIsAuth)
    //
    // useEffect(() =>{
    //     if(selector){
    //         setIsAuth(true)
    //     }
    //     console.log(selector)
    // },[selector])

    const setAuth = (data: Auth) => {
        if(data?.token){
            setToken(token)
            setIsAuth(true)
            setRole(data?.role)
        }
    }

    return(
        <AuthContext.Provider value={{
            setAuth,
            isAuth,
            token,
            role
        }}>
            {children}
        </AuthContext.Provider>
    )
}