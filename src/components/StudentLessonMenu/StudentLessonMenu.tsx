import {Laptop, Power} from "../assets/MainAssets";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {useSelector} from "react-redux";

type StudentLessonMenuProps = {
    pageId : string;
    setPageId : (pageId:string) => void;
    isFinish: boolean;
    isStart: boolean;
    quizId:string;
    setFirstQuestion: (questionId:string) => void;
    setIsQuestion: (questionId:boolean) => void;
}

const StudentLessonMenu = ({pageId, setPageId, isFinish, quizId, isStart, setFirstQuestion, setIsQuestion}:StudentLessonMenuProps) => {
    const [questions ,setQuestions] = useState<any>([])
    const {StudentQuestion} = useSelector((state:any) => state.StudentQuestion)

    useEffect(() => {
        if(questions[0]){
            setFirstQuestion(questions[0])
        }
    }, [questions])

    const onClickHandler = (id:string) => {
        if(isStart){
            setPageId(id)
            setIsQuestion(true)
        }
    }

    useEffect(() => {
        if(StudentQuestion.status == 'loaded'){
            const questionsId:string[] = []
            StudentQuestion.items.map((item:any) => {
                questionsId.push(item.question_id)
            })
            setQuestions(questionsId)
        }
    }, [StudentQuestion])

    const finishHandler = () =>{
        if(isFinish){
            setPageId('10')
        }
    }


    return(
        <div className="w-1/5 border-r-[2px] border-black">
            <ul className="flex flex-col gap-5 px-2 items-end">
                <li className={`flex gap-2 w-full rounded-2xl ${pageId === '0' ? 'bg-green-400' : 'bg-green-400 opacity-50'}  py-2 px-2 text-white cursor-pointer`} onClick={() => {
                    setPageId('0')
                    setIsQuestion(false)
                }}>
                    <Laptop/>
                    <span>preview</span>
                </li>
                {!isStart && !isFinish && <li
                    className='flex gap-2 w-full rounded-2xl bg-orange-400 cursor-pointer py-2 px-2 text-white justify-center'
                    onClick={() => {
                        setPageId('1')
                        setIsQuestion(false)
                    }}>
                    Квиз
                </li>}
                {questions.map((item:any, index:number) => (
                    <li className={`w-2/3 flex gap-2 rounded-2xl bg-blue-500 ${isStart? ' cursor-pointer' : 'opacity-40 cursor-not-allowed'} ${pageId === item ? 'scale-x-105 opacity-100' : 'scale-x-100 '}  py-2 px-2 text-white justify-center`} onClick={() => onClickHandler(item)}>
                        вопрос {index+1}
                    </li>
                    )
                )}

                <li className={`flex gap-2 w-full rounded-2xl bg-violet-400 ${isFinish ? 'cursor-pointer opacity-100': 'cursor-not-allowed opacity-40'} py-2 px-2 text-white `} onClick={() => {finishHandler()}}>
                    <Power color={'#ffffff'}/>
                    <span>overall</span>
                </li>
            </ul>
        </div>
    )
}

export default StudentLessonMenu