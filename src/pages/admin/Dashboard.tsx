import { ResponsiveBar } from '@nivo/bar'
import './adminDashboard.scss'
import {useState} from "react";

const Dashboard = () =>{
    const [data, setData] = useState([
        {
            "country": "AD",
            "hot dog": 78,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 18,
            "burgerColor": "hsl(343,100%,1%)",
            "sandwich": 14,
            "sandwichColor": "hsl(0,0%,0%)",
            "kebab": 115,
            "kebabColor": "hsl(0,0%,0%)",
            "fries": 129,
            "friesColor": "hsl(0,0%,0%)",
            "donut": 10,
            "donutColor": "hsl(0,0%,0%)"
        },
        {
            "country": "AE",
            "hot dog": 73,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 18,
            "burgerColor": "hsl(40, 70%, 50%)",
            "sandwich": 86,
            "sandwichColor": "hsl(231, 70%, 50%)",
            "kebab": 6,
            "kebabColor": "hsl(148, 70%, 50%)",
            "fries": 73,
            "friesColor": "hsl(216, 70%, 50%)",
            "donut": 45,
            "donutColor": "hsl(177, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 91,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 178,
            "burgerColor": "hsl(300, 70%, 50%)",
            "sandwich": 119,
            "sandwichColor": "hsl(311, 70%, 50%)",
            "kebab": 142,
            "kebabColor": "hsl(111, 70%, 50%)",
            "fries": 28,
            "friesColor": "hsl(339, 70%, 50%)",
            "donut": 73,
            "donutColor": "hsl(198, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 185,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 74,
            "burgerColor": "hsl(258, 70%, 50%)",
            "sandwich": 35,
            "sandwichColor": "hsl(171, 70%, 50%)",
            "kebab": 184,
            "kebabColor": "hsl(167, 70%, 50%)",
            "fries": 97,
            "friesColor": "hsl(210, 70%, 50%)",
            "donut": 185,
            "donutColor": "hsl(227, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 31,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 95,
            "burgerColor": "hsl(32, 70%, 50%)",
            "sandwich": 27,
            "sandwichColor": "hsl(356, 70%, 50%)",
            "kebab": 104,
            "kebabColor": "hsl(62, 70%, 50%)",
            "fries": 174,
            "friesColor": "hsl(195, 70%, 50%)",
            "donut": 87,
            "donutColor": "hsl(100, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 139,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 19,
            "burgerColor": "hsl(68, 70%, 50%)",
            "sandwich": 148,
            "sandwichColor": "hsl(309, 70%, 50%)",
            "kebab": 183,
            "kebabColor": "hsl(50, 70%, 50%)",
            "fries": 53,
            "friesColor": "hsl(280, 70%, 50%)",
            "donut": 1,
            "donutColor": "hsl(3, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 167,
            "hot dogColor": "hsl(0,0%,0%)",
            "burger": 195,
            "burgerColor": "hsl(0, 0%, 0%)",
            "sandwich": 124,
            "sandwichColor": "hsl(0, 0%, 0%)",
            "kebab": 93,
            "kebabColor": "hsl(0, 0%, 0%)",
            "fries": 110,
            "friesColor": "hsl(0, 0%, 0%)",
            "donut": 24,
            "donutColor": "hsl(0, 0%, 0%)"
        }
    ])


    setTimeout(() =>{
        setData([
            {
                "country": "AD",
                "hot dog": 38,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 64,
                "burgerColor": "hsl(343,100%,1%)",
                "sandwich": 32,
                "sandwichColor": "hsl(0,0%,0%)",
                "kebab": 203,
                "kebabColor": "hsl(0,0%,0%)",
                "fries": 43,
                "friesColor": "hsl(0,0%,0%)",
                "donut": 12,
                "donutColor": "hsl(0,0%,0%)"
            },
            {
                "country": "AE",
                "hot dog": 34,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 14,
                "burgerColor": "hsl(40, 70%, 50%)",
                "sandwich": 32,
                "sandwichColor": "hsl(231, 70%, 50%)",
                "kebab": 63,
                "kebabColor": "hsl(148, 70%, 50%)",
                "fries": 12,
                "friesColor": "hsl(216, 70%, 50%)",
                "donut": 34,
                "donutColor": "hsl(177, 70%, 50%)"
            },
            {
                "country": "AF",
                "hot dog": 32,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 34,
                "burgerColor": "hsl(300, 70%, 50%)",
                "sandwich": 23,
                "sandwichColor": "hsl(311, 70%, 50%)",
                "kebab": 34,
                "kebabColor": "hsl(111, 70%, 50%)",
                "fries": 32,
                "friesColor": "hsl(339, 70%, 50%)",
                "donut": 12,
                "donutColor": "hsl(198, 70%, 50%)"
            },
            {
                "country": "AG",
                "hot dog": 53,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 43,
                "burgerColor": "hsl(258, 70%, 50%)",
                "sandwich": 23,
                "sandwichColor": "hsl(171, 70%, 50%)",
                "kebab": 43,
                "kebabColor": "hsl(167, 70%, 50%)",
                "fries": 97,
                "friesColor": "hsl(210, 70%, 50%)",
                "donut": 185,
                "donutColor": "hsl(227, 70%, 50%)"
            },
            {
                "country": "AI",
                "hot dog": 31,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 95,
                "burgerColor": "hsl(32, 70%, 50%)",
                "sandwich": 27,
                "sandwichColor": "hsl(356, 70%, 50%)",
                "kebab": 104,
                "kebabColor": "hsl(62, 70%, 50%)",
                "fries": 174,
                "friesColor": "hsl(195, 70%, 50%)",
                "donut": 87,
                "donutColor": "hsl(100, 70%, 50%)"
            },
            {
                "country": "AL",
                "hot dog": 139,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 19,
                "burgerColor": "hsl(68, 70%, 50%)",
                "sandwich": 148,
                "sandwichColor": "hsl(309, 70%, 50%)",
                "kebab": 183,
                "kebabColor": "hsl(50, 70%, 50%)",
                "fries": 53,
                "friesColor": "hsl(280, 70%, 50%)",
                "donut": 1,
                "donutColor": "hsl(3, 70%, 50%)"
            },
            {
                "country": "AM",
                "hot dog": 167,
                "hot dogColor": "hsl(0,0%,0%)",
                "burger": 195,
                "burgerColor": "hsl(0, 0%, 0%)",
                "sandwich": 124,
                "sandwichColor": "hsl(0, 0%, 0%)",
                "kebab": 93,
                "kebabColor": "hsl(0, 0%, 0%)",
                "fries": 110,
                "friesColor": "hsl(0, 0%, 0%)",
                "donut": 24,
                "donutColor": "hsl(0, 0%, 0%)"
            }
        ])
    }, 4000)

    return(
        <div className='admin_dashboard'>
            <h3 className='header'>Dashboard</h3>

            <div className="card_wrapper">
                <div className="card">
                    <div className="header">
                        <h3>Количество учеников</h3>
                    </div>
                    <div className="body">
                        <h2>1000</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="header">
                        <h3>Количество преподователей</h3>
                    </div>
                    <div className="body">
                        <h2>167</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="header">
                        <h3>Количество учеников</h3>
                    </div>
                    <div className="body">
                        <h2>1000</h2>
                    </div>
                </div>
            </div>
            <div className="chart-wrapper" style={{maxWidth:700, height: 500, backgroundColor:'white', borderRadius: '12px'}}>
                <ResponsiveBar
                    data={data}
                    keys={[
                        'hot dog',
                        // 'burger',
                        // 'sandwich',
                        // 'kebab',
                        // 'fries',
                        // 'donut'
                    ]}
                    indexBy="country"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'fries'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'sandwich'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'country',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'food',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
                />
            </div>
        </div>
    )
}

export default Dashboard