import StudentIndex from "./index";
import './student.scss'

const DashboardStudent =() =>{
    const fakeData = [
        {
            subjectName: 'Math',
            teacherName: 'Raushan Sagdatovna',
            grade: 30,
            message: 'hard work'
        },
        {
            subjectName: 'History',
            teacherName: 'Adam Adamson',
            grade: 80,
            message: 'good'
        },
        {
            subjectName: 'Chemistry',
            teacherName: 'Michel Gates',
            grade: 100,
            message: "excellent"
        },
        {
            subjectName: 'Biology',
            teacherName: 'Ivan Alexandr',
            grade: 50,
            message: 'satisfy'
        },
    ]

    return(
        <StudentIndex>
            <h1 className="font-bold text-2xl mb-2">Оценки</h1>
            <div className="grid grid-cols-4 gap-10">
                {fakeData.map(element => (
                    <div className={`shadow-xl py-2 px-4 w-full rounded-xl ${element.grade >= 80 ? 'bg-[#afffc133]' : ''} ${element.grade < 80 && element.grade >= 50? 'bg-[#ffdcaf33]' : ''} ${element.grade < 50? 'bg-[#ffafaf33]' : ''}`}>
                        <div className="flex justify-between">
                            <p>{element.subjectName}</p>
                            <p>{element.teacherName}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="percent">
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36"
                                         className={`circular-chart ${element.grade >= 80 ? 'green' : ''} ${element.grade < 80 && element.grade >= 50 ? 'orange' : ''} ${element.grade < 50 ? 'red' : ''}`}>
                                        <path className="circle-bg"
                                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <path className="circle" strokeDasharray={`${element.grade}, 100`}
                                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                        <text x="18" y="20.35" className="percentage">{element.grade}%</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </StudentIndex>
    )
}

export default DashboardStudent;