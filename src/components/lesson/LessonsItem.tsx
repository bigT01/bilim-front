import {Edit, Trash} from "../assets/MainAssets";
import pictureLesson from "../../pages/admin/subject/pictureLessone.png";
import {useDispatch} from "react-redux";
import {fetchRemoveLesson} from "../../Redux/slices/lessons";

type LessonsItemProps = {
    id: string,
    name: string,
    added: string
}

const LessonsItem = ({name, id, added}: LessonsItemProps) => {
    const dispatch = useDispatch()

    const handleRemove = (id:string) =>{
        // @ts-ignore
        dispatch(fetchRemoveLesson(id))
    }
    return(
        <div className="lesson_item">
            <button className="btn_edit"><Edit color={'#ffffff'}/></button>
            <div className="lesson_picture_wrapper">
                <img src={`http://localhost:4444${added}`} alt="pictureLesson"/>
            </div>
            <div className="lesson_body">
                <div className="body_information">
                    <p className='lesson_name'>{name}</p>
                </div>
                <button className='btn_delete' onClick={() => handleRemove(id)}><Trash color={'#ffffff'}/></button>
            </div>
        </div>
    )
}

export default LessonsItem