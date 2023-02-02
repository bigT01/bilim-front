import {createContext, ReactNode, useContext, useState} from "react";
import {Auth} from "../constants/Interfaces";

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