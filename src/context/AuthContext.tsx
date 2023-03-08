import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Auth} from "../constants/Interfaces";
import {useSelector} from "react-redux";
import {SelectIsAuth} from "../Redux/slices/auth";
import {useLocalStorage} from "../hooks/UseLocalStorage";

type AuthProviderType = {
    children: ReactNode
}

type AuthContextType = {
    setAuth: (data:Auth) => void,
    isAuth: boolean,
    userId: string,
    token: string,
    role: string,
}


const AuthContext = createContext({} as AuthContextType)

export const UseAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}: AuthProviderType) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userId, setUserId] = useState('')
    const [role, setRole] = useState<string>('')
    const [token, setToken] = useState<string>('')


    const setAuth = (data: Auth) => {
        if(data?.token){
            setToken(token)
            setIsAuth(true)
            setRole(data?.role)
            setUserId(data?.id)
            window.localStorage.setItem('token', data?.token)
        }
    }

    return(
        <AuthContext.Provider value={{
            setAuth,
            isAuth,
            userId,
            token,
            role
        }}>
            {children}
        </AuthContext.Provider>
    )
}