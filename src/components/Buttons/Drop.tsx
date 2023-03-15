import VariantItem from "./DnDItems/VariantItem";
import s from "./Dnd.module.scss"
import {useEffect, useState} from "react";
import AnswerItem from "./DnDItems/AnswerItem";
import {fetchStudentAnswersCreate} from "../../Redux/slices/StudentAnswers";
import {useDispatch} from "react-redux";



const Drop = ({question, variants, id}:any) =>{
    const [value, setValue] = useState<any>([])
    const dispatch = useDispatch()
    if (question){
        const splited = question?.split('[]')

        const word = splited.length - 1

        const concatenatedItems = splited.reduce((acc:any, item:any, index:any) => {
            return acc === null ? [item] : [...acc, <AnswerItem defaultId={index.toString()+id.toString()} key={index.toString()+id.toString()} id={id} setValue={setValue} index={index}/>, item];
        }, null);

        useEffect(() => {
            if(value[0]){
                // @ts-ignore
                dispatch(fetchStudentAnswersCreate({id, value: value}))
            }
        }, [value])

        return(
            <div className={s.container}>
                <div className={`${s.variantsMatch}`}>
                    {/*<p className={s.answerText}>some text is going and this part should {<AnswerItem/>} drop text</p>*/}
                    {word ? <p className={s.answerText}>{concatenatedItems}</p>:null}
                </div>
                <div
                    className={`${s.variants} `}
                    onDrop={e => {
                        e.preventDefault();
                        let data = e.dataTransfer.getData("text");
                        // @ts-ignore
                        e.target.appendChild(document.getElementById(data));

                    }}
                    onDragOver={e => {
                        e.preventDefault();
                    }}
                >
                    {variants[0] && variants.map((item:any, index:any) => (
                        <VariantItem key={index} variant={item} id={item.split(' ').join('_')+index.toString()}/>
                    ))}
                </div>
            </div>
        )
    }
    else{
        return null
    }
}

export default Drop