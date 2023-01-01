import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";

const AdminIndex = () =>{
    return(
        <Layout>
            <Menu/>
            <Header />
            <div className="main" style={{gridArea: 'main', backgroundColor: 'inherit', height:'100vh'}}>

            </div>
        </Layout>
    )
}

export default AdminIndex