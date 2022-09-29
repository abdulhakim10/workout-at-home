import React, { useEffect, useState } from 'react';
import logo from '../../images/logo-wrk.jpg'
import Workout from '../Workout/Workout';
import image from '../../images/me.jpg'
import './Workouts.css'
const Workouts = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('fakeDB.json')
        .then(res => res.json())
        .then(data => setWorkouts(data))
    }, [])
    return (
        <div className='hw-container'>
            <div>
            <div className="name-logo">
            <img src={logo} alt="" />
            <h1 className='name'>Workout At Home</h1>
            </div>
            <div className="workout-container">
                {
                    workouts.map(workout => <Workout
                    key={workout.id} 
                    workout={workout}
                    ></Workout> )
                }
            </div>
            </div>
            <div className="chart-container">
               <div className="my-info">
                <img src={image} alt="" />
                <div className='my-name'>
                <h3>Syed Abdul Hakim</h3>
                <p><small>Dhaka, Bangladesh</small></p>
                </div>
               </div>
                
                
            </div>
        </div>
    );
};

export default Workouts;