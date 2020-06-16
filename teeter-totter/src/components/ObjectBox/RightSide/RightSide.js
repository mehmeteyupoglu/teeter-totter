import React from 'react';
import { useSelector, useDispatch} from "react-redux"

const options = ["triangle", "rectangle", "circle"]

const getRandomBox = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem =  arr[randomIndex];
    return randomItem;
  };

const randomWeight = Math.floor(Math.random() * 9) + 1
const randomBox = getRandomBox(options)

const RightSide = () => {

    const weight = useSelector(state => state.appReducer.rightTotalWeight)
    const momentum = useSelector(state => state.appReducer.rightMomentum)
    
    return (
        <div className="right-box">
            <div className="score-board">
                <h2>Total Weight: {weight}</h2>
                <h2>Momentum: {momentum}</h2>
            </div>
            <div className="boxes">
                <div className={randomBox}>
                    {randomWeight} kg
                </div>
            </div>
        </div>
    );
}

export default RightSide;


