import React from 'react';
import logo from '../../images/logo-wrk.jpg'
import './HomeWorkout.css'
const HomeWorkout = () => {
    return (
        <div className='hw-container'>
            <div>
            <div className="name-logo">
            <img src={logo} alt="" />
            <h1 className='name'>Workout At Home</h1>
            </div>
            <div className="workout-container">
                <h1>Workouts</h1>
            </div>
            </div>
            <div className="chart-container">
                <h2>Workout Chart</h2>
            </div>
        </div>
    );
};

export default HomeWorkout;