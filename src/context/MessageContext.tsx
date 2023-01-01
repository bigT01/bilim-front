import {createContext, ReactNode, useContext, useState} from "react";

type MessageProviderProps = {
    children: ReactNode
}

type MessageContext = {
    Message: string,
    type: 'error' | 'success' | 'warning' | null,
    setMessage: (message: string, types: 'error' | 'success' | 'warning' | null)=>void
}


const MessageContext = createContext({} as MessageContext)

export const useMessageContext = () =>{
    return useContext(MessageContext)
}

export const MessageProvider =({children}: MessageProviderProps) =>{
    const [Message, setMessageLocal] = useState<string>(' ')
    const [type, setType] = useState<'error' | 'success' | 'warning' | null>(null)

    const setMessage = (message: string, types: 'error' | 'success' | 'warning' | null) =>{
        setMessageLocal(message)
        setType(types)

        setTimeout(() =>{setMessageLocal('')}, 2500)
    }


    return(
        <MessageContext.Provider
            value={{
                Message,
                type,
                setMessage,
            }}>
            {children}
        </MessageContext.Provider>
    )
}



