import AdminIndex from "../index";
import '../styles/Addlesson.scss'
import {Button, Input, message} from "antd";
import {useState} from "react";
import axios from "../../../axios";
import {useNavigate} from "react-router-dom";

const AddSubject = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = () => {
        setIsLoading(true)
        axios.post('/course', {
            name: name,
            description: description
        })
            .then(res => {
                message.success('Курс успешно был создан')
            })
            .catch(err => {
                message.error('ошибка с сервером')
            })
            .finally(() => {
                navigate('/admin/subjects')
                setIsLoading(false)
            })

    }
    return(
        <AdminIndex>
            <div className="addLesson_wrapper">
                <form className='lesson_form'>
                    <div className="input_wrapper">
                        <label>Название Курса<span className='require'>*</span></label>
                        <Input onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="input_wrapper">
                        <label>Описание<span className='require'>*</span></label>
                        <Input onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="btn_wrapper">
                        <Button type="primary" style={{backgroundColor: '#00bb00'}} size={"large"} onClick={() => submitHandler()}>Создать</Button>
                    </div>
                </form>
            </div>
        </AdminIndex>
    )
}

export default AddSubject