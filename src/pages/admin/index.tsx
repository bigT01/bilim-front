import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Dashboard from "./Dashboard";

const AdminIndex = () =>{
    return(
        <Layout>
            <Menu/>
            <Header />
            <Main>
                <Dashboard/>
            </Main>
        </Layout>
    )
}

export default AdminIndex