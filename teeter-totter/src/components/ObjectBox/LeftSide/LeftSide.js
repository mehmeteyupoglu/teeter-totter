import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addToLeft } from "../../../state/TT_Store/actions"

const options = ["triangle", "rectangle", "circle"]

const getRandomBox = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem =  arr[randomIndex];
    return randomItem;
  };

const randomWeight = Math.floor(Math.random() * 9) + 1
const randomBox = getRandomBox(options)


const LeftSide = () => {
    const weight = useSelector(state => state.appReducer.leftTotalWeight)
    const momentum = useSelector(state => state.appReducer.leftMomentum)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addToLeft(randomWeight))
    })
    
    return (
        <div>
            <div className="left-box">
                    <div className="score-board">
                        <h2>Total Weight: {weight} </h2>
                        <h2>Momentum: {momentum} </h2>
                    </div>
                    <div className="boxes">
                        <div className={randomBox} >
                            {randomWeight} kg
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default LeftSide;
