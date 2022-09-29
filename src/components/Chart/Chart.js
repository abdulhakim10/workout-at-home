import React from 'react';
import image from '../../images/me.jpg'
import './Chart.css'

const Chart = (props) => {
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
                        <p>10s</p>
                    </div>
                    <div>
                        <p>20s</p>
                    </div>
                    <div>
                        <p>30s</p>
                    </div>
                    <div>
                        <p>40s</p>
                    </div>
                    <div>
                        <p>50s</p>
                    </div>
                </div>
                <h3>Exercise Details</h3>
                <h4>Exercise Time: 0</h4>
                <h4>Break Time: 0</h4>
        </div>
    );
};

export default Chart;