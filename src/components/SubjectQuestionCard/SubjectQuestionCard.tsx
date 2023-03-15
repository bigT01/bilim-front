import RadioComponent from "../Buttons/RadioComponent";
import Drop from "../Buttons/Drop";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {useSelector} from "react-redux";
import {Button} from "antd";
import Multiple from "../Buttons/Multiple";
import SelectComponent from "../Buttons/SelectComponent";


type SubjectQuestionCardProps = {
   id:string;
    quizId: string,
    FinishHandler: () => void
}

const SubjectQuestionCard = ({id, quizId, FinishHandler}:SubjectQuestionCardProps) => {
    const [isFinish, setIsFinish] = useState(false)
    const [isLastQuestion, setIsLastQuestion] = useState(false)
    const {StudentQuestion} = useSelector((state:any) => state.StudentQuestion)
    const {StudentAnswers} = useSelector((state:any) => state.StudentAnswers)
    const [data, setData] = useState<any>()


    useEffect(() => {
        if(StudentQuestion){
            const da = StudentQuestion.items.filter((item:any) => item.question_id === id)
            setData(da[0])
        }
        if(StudentAnswers.items[StudentAnswers.items.length-1]?.id === id){
            setIsLastQuestion(true)
        } else{
            setIsLastQuestion(false)
        }
        if(StudentAnswers.items.length === StudentQuestion.items.length){
            setIsFinish(true)
        }
    }, [StudentQuestion, id, StudentAnswers])


    return (
        <div className='w-full'>
            {data?.type !== 'drop' && <h3 className="text-[16px] font-bold mb-10">{data?.question}</h3>}
            {data?.photo && <img src={`http://localhost:4444${data?.photo}`} alt="img-question" className={'mb-10'}/>}
            <div className="mb-16">
                {data?.type === 'checkbox' && <RadioComponent variants={data?.options} id={id} />}
                {data?.type === 'multiple' && <Multiple variants={data?.options} id={id} />}
                {data?.type === 'drop' && <Drop question={data?.question} variants={data?.options} id={id}/>}
                {data?.type === 'select' && <SelectComponent variants={data?.options} selectVar={data?.variants}  id={id} />}
            </div>

            {/*<div className="btn_wrapper center">*/}
            {/*    <button onClick={() => setPageNumber(oldState => oldState - 1)}>prev</button>*/}
            {/*    {isFinish ? <button>Finish</button>  :<button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>}*/}
            {/*</div>*/}
            {isFinish && isLastQuestion && <div className="flex w-full justify-end">
                <Button type='primary' onClick={() => FinishHandler()}>Finish</Button>
            </div>}
        </div>
    )
}

export default SubjectQuestionCard