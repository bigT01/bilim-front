import {createContext, ReactNode, useContext, useState} from "react";
import {Auth} from "../constants/Interfaces";

type AuthProvider = {
    children: ReactNode
}

type AuthContext = {
    setAuth: (data:Auth) => void,
    isAuth: boolean,
    token: string,
    role: string,
}


const AuthContext = createContext({} as AuthContext)

export const UseAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({children}: AuthProvider) =>{
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [role, setRole] = useState<string>('admin')
    const [token, setToken] = useState<string>('')

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