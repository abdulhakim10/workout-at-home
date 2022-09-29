import React from 'react';
import './Workout.css'
const Workout = (props) => {
    // console.log(props)
    const {name, image, duration,} = props.workout;
    return (
        <div className='workout-info'>
            <img src={image} alt="" />
           <h3>{name}</h3>
           <p>For Age: 18 - 35 </p>
           <p>Duration: {duration} min </p>
           <button>Add To Chart</button>
        </div>
    );
};

export default Workout;