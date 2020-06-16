import React from 'react';
import { useSelector, useDispatch } from "react-redux"



const LeftSide = () => {
    const weight = useSelector(state => state.appReducer.leftTotalWeight)
    const momentum = useSelector(state => state.appReducer.leftMomentum)
    
    return (
        <div>
            <div className="left-box">
                    <div className="score-board">
                        <h2>Total Weight: {weight} </h2>
                        <h2>Momentum: {momentum} </h2>
                    </div>
                    <div className="boxes">
                        <div className="triangle">3kg</div>
                        <div className="circle">5kg</div>
                        <div className="rectangle">7kg</div>
                    </div>
                </div>
        </div>
    );
}

export default LeftSide;
