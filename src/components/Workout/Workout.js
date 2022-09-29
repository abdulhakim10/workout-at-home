import React from 'react';
import './Workout.css'
const Workout = (props) => {
    // console.log(props)
    const {handlerToAddChart, workout} = props
    const {name, image, duration,} = workout;
    return (
        <div className='workout-info'>
            <img src={image} alt="" />
           <div className="details">
           <h3>{name}</h3>
           <p>For Age: 18 - 35 </p>
           <p>Time Required: {duration} min </p>
           <button onClick={() => handlerToAddChart(workout)}>Add To Chart</button>
           </div>
        </div>
    );
};

export default Workout;