import TeacherIndex from "./index";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "../../axios";
import {Avatar} from "../../components/assets/MainAssets";
import {ResponsiveLine} from "@nivo/line";

const TeacherStudentCard = () => {
    const {id} = useParams()
    const [data, setData] = useState<any>()
    const [grades, setGrades] = useState<any>()

    useEffect(() => {
        axios.get(`/userOne/${id}`)
            .then(res => {
                setData(res.data)
            })
    },[])


    useEffect(() => {
        if(data){
            setGrades([
                {
                    id: data?.full_name,
                    color: "hsl(232,70%,50%)",
                    data: data?.grades ,
                }
            ])
        }
    }, [data])
    return(
        <TeacherIndex>
            <h2 className='font-bold text-2xl mb-10'>Профиль студента</h2>
            <div className="student_profile">
                <div className="main_information">
                    <div className="picture">
                        <Avatar color={'#0fce0f'} background={'#075407'}/>
                    </div>
                    <div className="information">
                        <div className="form_wrapper">
                            <label>Имя:</label>
                            <div className="person_information">{data?.full_name}</div>
                        </div>
                        <div className="form_wrapper">
                            <label>Класс:</label>
                            <div className="person_information">{data?.attend}</div>
                        </div>
                        <div className="form_wrapper">
                            <label>Логин:</label>
                            <div className="person_information">{data?.login}</div>
                        </div>
                    </div>
                </div>
                <div className="additional_information">
                    <div className="box_wrapper">
                        <p>Средний оцененки:</p>
                        <div className="avg_score">
                            <h2>{data?.avg}%</h2>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    {grades && (// @ts-ignore}
                        <ResponsiveLine
                            data={grades}
                            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                            xScale={{ type: 'point' }}
                            yScale={{
                                type: 'linear',
                                min: 'auto',
                                max: 'auto',
                                stacked: true,
                                reverse: false
                            }}
                            yFormat=" >-.2f"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: 'bottom',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Уроки',
                                legendOffset: 36,
                                legendPosition: 'middle'
                            }}
                            axisLeft={{
                                orient: 'left',
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Проценты',
                                legendOffset: -40,
                                legendPosition: 'middle'
                            }}
                            pointSize={10}
                            pointColor={{ theme: 'background' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabelYOffset={-12}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 100,
                                    translateY: 0,
                                    itemsSpacing: 0,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemBackground: 'rgba(0, 0, 0, .03)',
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    )}
                </div>
            </div>
        </TeacherIndex>
    )
}

export default TeacherStudentCard