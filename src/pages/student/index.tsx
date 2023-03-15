import {ReactNode} from "react";
import Layout from "../../components/Layout/Layout";
import Menu from "../../components/Menu/Menu";
import {Dashboard, Settings, Student, Subjects, Teacher} from "../../components/assets/MainAssets";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

type StudentIndexProps = {
    children: ReactNode
}

const StudentIndex = ({children}:StudentIndexProps) =>{
    const link = [
        {
            to: '/student/dashboard',
            icon: <Dashboard/>,
            name: 'Dashboard'
        },
        {
            to: '/student/subject',
            icon:  <Subjects/>,
            name: "Subjects"
        },
            {
                to: '/student/message',
                icon:  <Subjects/>,
                name: "сообщения"
            },
    ]


    return(
        <Layout>
            <Menu Links={link}/>
            <Header />
            <Main>
                {children}
            </Main>
        </Layout>
    )
}

export default StudentIndex