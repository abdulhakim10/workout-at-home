import React, { useState } from 'react';
import image from '../../images/me.jpg'
import './Chart.css'

const Chart = ({chart}) => {
    const [seconds, setSeconds] = useState(0)
    let total = 0;
    for(const workout of chart){
        total = total + workout.duration;
        // console.log(workout)
    }

    const handlerToAddBreak = second => {
        setSeconds(second)
    }
    return (
        <div>
                <div className="my-info">
                <img src={image} alt="" />
                <div className='my-name'>
                <h3>Syed Abdul Hakim</h3>
                <p><small>Dhaka, Bangladesh</small></p>
                </div>
               </div>
                <h3>Add A Break</h3>
                <div className="break">
                    <div>
                        <p onClick={() => handlerToAddBreak(10)}>10s</p>
                    </div>
                    <div>
                        <p onClick={() => handlerToAddBreak(20)}>20s</p>
                    </div>
                    <div>
                        <p onClick={() => handlerToAddBreak(30)}>30s</p>
                    </div>
                    <div>
                        <p onClick={() => handlerToAddBreak(40)}>40s</p>
                    </div>
                    <div>
                        <p onClick={() => handlerToAddBreak(50)}>50s</p>
                    </div>
                </div>
                <h3>Exercise Details</h3>
                <h4>Exercise Time: {total} minutes</h4>
                <h4>Break Time: {seconds}</h4>
        </div>
    );
};

export default Chart;