import React, {ReactNode, useEffect, useRef} from "react";
import s from './Layout.module.scss'

type LayoutProps = {
    children: ReactNode
}

interface RefObject<T> {
    readonly current: T | null;
}


const Layout = ({children}: LayoutProps) =>{
    return(
        <div className={s.layoutWrapper}>
            {children}
        </div>
    )
}

export default Layout