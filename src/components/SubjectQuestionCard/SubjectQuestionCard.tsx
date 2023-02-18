import RadioComponent from "../Buttons/RadioComponent";
import Drop from "../Buttons/Drop";

interface variantSelection{
    id: string,
    answer: string
}

type SubjectQuestionCardProps = {
    setPageNumber: (updatePageNumber: (prevPageNumber: number) => number) => void;
    isFinish: boolean,
    question: string,
    type:string,
    variant: variantSelection[],
    DropQuestion?: string
}

const SubjectQuestionCard = ({setPageNumber, isFinish, question, type, variant, DropQuestion}:SubjectQuestionCardProps) => {
    return (
        <div className='content'>
            <h3 className="question">{question}</h3>
            <div className="answer_list">
                {type === 'checkbox' && <RadioComponent variants={variant}/>}
                {type === 'drop' && <Drop DropQuestion={DropQuestion}/>}
            </div>
            <div className="btn_wrapper center">
                <button onClick={() => setPageNumber(oldState => oldState - 1)}>prev</button>
                {isFinish ? <button>Finish</button>  :<button onClick={() => setPageNumber(oldState => oldState + 1)}>next</button>}
            </div>
        </div>
    )
}

export default SubjectQuestionCard