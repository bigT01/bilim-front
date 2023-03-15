import s from "../Dnd.module.scss";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchStudentAnswersCreate} from "../../../Redux/slices/StudentAnswers";

const AnswerItem = ({id, index, setValue, defaultId}: any) =>{
    const [isEnter, setIsEnter] = useState(false)
    const [data, setData] = useState<any>()

    useEffect(() =>{
        if(data){
            setValue((oldData:any) => [...oldData,{id:index, value:data.querySelector('p').textContent}])
        }
    }, [data])





    return(
        <span className={`${s.element} ${isEnter? s.enter: null}`}
              id={defaultId}
              onDragEnter={() => setIsEnter(true)}
              onDragLeave={() => setIsEnter(false)}
              onDrop={e => {
                  let data = e.dataTransfer.getData("text");
                  if(data){
                      e.preventDefault();
                      // @ts-ignore
                      e.target.appendChild(document.getElementById(data));
                      setData(document.getElementById(data))
                  }
              }}

              onDragOver={e => {
                  e.preventDefault();
              }}>
        </span>
    )
}

export default AnswerItem