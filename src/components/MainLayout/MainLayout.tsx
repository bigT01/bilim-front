import {ReactNode, useRef} from "react";
import {useMessageContext} from "../../context/MessageContext";
import { Transition } from 'react-transition-group';
import s from "./mainLayout.module.css"

type MainLayoutProps = {
    children: ReactNode
}


const MainLayout = ({children}: MainLayoutProps) =>{
    const {Message, type} = useMessageContext()
    const nodeRef = useRef(null);

    return(
        <div style={{position: 'relative'}} >
            <Transition nodeRef={nodeRef} in={Message ? true : false} timeout={2000}>
                {state => (
                    <div ref={nodeRef} className={`${s.messageWrapper} ${state === 'entering'? s.entering : ''} ${state === 'exiting'? s.exiting : ''} ${state === 'exited'? s.exited : ''} ${state === 'entered'? s.entered : ''} ${type === 'error'? s.error : ''} ${type === 'warning'? s.warning : ''} ${type === 'success'? s.success : ''}`}>
                        {Message}
                    </div>
                )}
            </Transition>
            {children}
        </div>
    )
}

export default MainLayout