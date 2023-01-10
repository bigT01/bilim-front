import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Dashboard from "./Dashboard";
import {ReactNode} from "react";

type AdminIndex = {
    children: ReactNode;
}

const AdminIndex = ({children}: AdminIndex) =>{
    return(
        <Layout>
            <Menu/>
            <Header />
            <Main>
                {children}
            </Main>
        </Layout>
    )
}

export default AdminIndex