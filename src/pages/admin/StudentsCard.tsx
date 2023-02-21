import AdminIndex from "./index";
import './styles/StudentsCard.scss'
import {Avatar} from "../../components/assets/MainAssets";
import { ResponsiveLine } from '@nivo/line'

const StudentsCard = () => {
    const data = [
        {
            "id": "Tanat Azan",
            "color": "hsl(232,70%,50%)",
            "data": [
                {
                    "x": "1 урок",
                    "y": 100
                },
                {
                    "x": "2 урок",
                    "y": 90
                },
                {
                    "x": "3 урок",
                    "y": 80
                },
                {
                    "x": "4 урок",
                    "y": 88
                },
                {
                    "x": "5 урок",
                    "y": 75
                },
                {
                    "x": "6 урок",
                    "y": 100
                },
                {
                    "x": "7 урок",
                    "y": 30
                },
                {
                    "x": "8 урок",
                    "y": 60
                },
                {
                    "x": "9 урок",
                    "y": 80
                },
                {
                    "x": "10 урок",
                    "y": 100
                },
            ]
        },
    ]

    return(
        <AdminIndex>
            <h2 style={{marginBottom: 30}}>Профиль студента</h2>
            <div className="student_profile">
                <div className="main_information">
                    <div className="picture">
                        <Avatar color={'#0fce0f'} background={'#075407'}/>
                    </div>
                    <div className="information">
                        <div className="form_wrapper">
                            <label>Имя:</label>
                            <div className="person_information">Tanat Azan</div>
                        </div>
                        <div className="form_wrapper">
                            <label>Класс:</label>
                            <div className="person_information">3 Б</div>
                        </div>
                        <div className="form_wrapper">
                            <label>Возраст:</label>
                            <div className="person_information">17</div>
                        </div>
                        <div className="form_wrapper">
                            <label>Ник:</label>
                            <div className="person_information">Little_big</div>
                        </div>
                    </div>
                </div>
                <div className="additional_information">
                    <div className="box_wrapper">
                        <p>Рейтинг:</p>
                        <div className="rating">
                            <h2>10</h2>
                        </div>
                    </div>
                    <div className="box_wrapper">
                        <p>Средний оцененки:</p>
                        <div className="avg_score">
                            <h2>67%</h2>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    {// @ts-ignore}
                    <ResponsiveLine
                        data={data}
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
                    }
                </div>
            </div>
        </AdminIndex>
    )
}

export default StudentsCard