import StudentIndex from "./index";
import {Idea, Laptop, Power} from "../../components/assets/MainAssets";
import math from './assets/math.webp'
import {useEffect, useState} from "react";
import RadioComponent from "../../components/Buttons/RadioComponent";
import Drop from "../../components/Buttons/Drop";
import SubjectQuestionCard from "../../components/SubjectQuestionCard/SubjectQuestionCard";
import {Link, useParams} from "react-router-dom";
import axios from "../../axios";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Button, message} from "antd";
import StudentLessonMenu from "../../components/StudentLessonMenu/StudentLessonMenu";
import {useDispatch, useSelector} from "react-redux";
import {fetchStudentQuestion} from "../../Redux/slices/questionStudent";
import {UseAuthContext} from "../../context/AuthContext";
import {fetchStudentAnswersUpdate} from "../../Redux/slices/StudentAnswers";



const SubjectCardStudent = () =>{
    const {id} = useParams()
    const {userId} = UseAuthContext()
    const [pageNumber, setPageNumber] = useState('0')
    const [firstQuestion, setFirstQuestion] = useState('')
    const [isQuestion, setIsQuestion] = useState(false)
    const [isFinish, setIsFinish] = useState(false)
    const [isStart, setIsStart] = useState(false)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [quizId, setQuizId] = useState('')
    const [material, setMaterial] = useState('')
    const [totalPoint, SetTotalPoint] = useState(0)

    const {StudentAnswers} = useSelector((state:any) => state.StudentAnswers)

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`/lesson/${id}`)
            .then(res => {
                setDescription(res.data.description)
                setMaterial(res.data.material)
                setTitle(res.data.title)
            })
            .catch(err => console.log(err))
        axios.get(`/lesson/${id}/quiz`)
            .then(res => {
                setQuizId(res.data.quiz_id)
            })
            .catch(err => console.log(err))
        // @ts-ignore
        dispatch(fetchStudentAnswersUpdate())
    },[])

    useEffect(() =>{
        if(quizId){
            // @ts-ignore
            dispatch(fetchStudentQuestion(quizId))
        }
    }, [quizId])


    const onStartQuizHandler = () =>{
        setIsStart(true)
        setIsQuestion(true)
        setIsStart(true)
        setPageNumber(firstQuestion)
    }

    const FinishHandler = () => {
        axios.post(`/user/${userId}/lesson/${id}/quiz/${quizId}/question/answer`, {
            answer: StudentAnswers.items
        })
            .then(res => {
                SetTotalPoint(res.data.total_point)
                setPageNumber('10')
                setIsFinish(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if(pageNumber === '10'){
            setIsQuestion(false)
            setIsStart(false)
        }
    }, [pageNumber])


    return(
        <StudentIndex>
            <div className="subject_card">
                <div className="header">
                    <div className="subject_description">{title}</div>
                </div>
                <div className="body">
                    {quizId ? <StudentLessonMenu pageId={pageNumber} setPageId={setPageNumber} isFinish={isFinish}
                                        quizId={quizId} isStart={isStart} setFirstQuestion={setFirstQuestion} setIsQuestion={setIsQuestion}/>: <>LOADING...</>}
                    {pageNumber === '0' && <div className="content">
                        <div className="image_wrapper">
                            <iframe style={{width: '100%', height: '400px'}} src="https://www.youtube-nocookie.com/embed/oA55ckFYYoU"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen />
                        </div>
                        <div className="description">
                            <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
                        </div>

                    </div>}
                    {pageNumber === '1' && (
                        <div className='h-40 w-full flex justify-center items-center'>
                            <Button type='primary' onClick={() => onStartQuizHandler()}>Начать квиз</Button>
                        </div>
                    )}
                    {isQuestion && pageNumber && (
                        <SubjectQuestionCard id={pageNumber} quizId={quizId} FinishHandler={FinishHandler}/>
                    )}
                    {isFinish && pageNumber === '10' && (
                        <>
                            <div className="flex items-center justify-center w-full flex-col gap-10">
                                <div className="percent">
                                    <div className="single-chart" style={{width: 200}}>
                                        {totalPoint && <svg viewBox="0 0 36 36"
                                              className={`circular-chart ${totalPoint >= 80 ? 'green' : ''} ${totalPoint < 80 && totalPoint >= 50 ? 'orange' : ''} ${totalPoint < 50 ? 'red' : ''}`}>
                                            <path className="circle-bg"
                                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            <path className="circle" strokeDasharray={`${totalPoint}, 100`}
                                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                            <text x="18" y="20.35" className="percentage">{totalPoint}%</text>
                                        </svg>}
                                    </div>
                                </div>
                                <p className='text-lg font-bold'>вы хорошо сдали квиз</p>
                                <Link to={'/student/dashboard'} className={'px-4 py-2 bg-blue-500 text-white rounded-2xl'}>нажмите чтобы вернуться на главную страницу</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </StudentIndex>
    )
}

export default SubjectCardStudent