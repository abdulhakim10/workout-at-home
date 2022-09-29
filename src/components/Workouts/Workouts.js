import React, { useEffect, useState } from 'react';
import logo from '../../images/logo-wrk.jpg'
import Chart from '../Chart/Chart';
import Question from '../Question/Question';
import Workout from '../Workout/Workout';   
import './Workouts.css'
const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);
    const [chart, setChart] = useState([]);

    // for fetching data
    useEffect(() => {
        fetch('fakeDB.json')
        .then(res => res.json())
        .then(data => setWorkouts(data))
    }, [])

    // handler for add to chart
    const handlerToAddChart = (workout) => {
        const newChart = [...chart, workout];
        setChart(newChart);
       
    }

    return (
        <div>
            <div className='hw-container'>
            <div>
            <div className="name-logo">
            <img src={logo} alt="" />
            <h1 className='name'>Workout At Home</h1>
            </div>
            <h3 className='quote'>Choose Your Workout</h3>
            <div className="workout-container">
                {
                    workouts.map(workout => <Workout
                    key={workout.id} 
                    workout={workout}
                    handlerToAddChart={handlerToAddChart}
                    ></Workout> )
                }
            </div>
            </div>
            <div className="chart-container">
                <Chart chart={chart}></Chart>
            </div>
        </div>
        <div>
            <Question></Question>
        </div>
        </div>
    );
};

export default Workouts;