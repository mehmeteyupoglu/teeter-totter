import React, {useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux"
import { addToRight } from "../../../state/TT_Store/actions"

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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addToRight(randomWeight))
    })

    return (
        
        <div className="right-box">
            <div className="score-board">
                <h2>Total Weight: {weight}</h2>
                <h2>Momentum: {momentum}</h2>
            </div>
            <div className="boxes">
                <div className={randomBox} style={mystyle} >
                    {randomWeight} kg
                </div>
            </div>
        </div>
    );
}

const mystyle = {
    position: "absolute", 
    top: 363, 
    right: 100,  
  };

export default RightSide;


