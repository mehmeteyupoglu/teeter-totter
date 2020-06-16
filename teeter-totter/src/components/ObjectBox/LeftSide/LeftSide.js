import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addToLeft } from "../../../state/TT_Store/actions"
import { useInterval } from "../../../hooks"

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
    const [top, moveDown] = useState(150);
    const [left, moveRight] = useState(0)

    useEffect(() => {
        dispatch(addToLeft(randomWeight)); 
    })

    useInterval(() => {

        moveDown(top + 1)

    }, 1000)

    const mystyle = {
        position: "absolute", 
        top: top, 
        left: left, 
      };

    const invisibleButtons = {
        color: "transparent", backgroundColor: "transparent",  borderColor: "transparent", cursor: "default"
    }
    
    const move = ({ keyCode }) => {
        console.log(keyCode)
        
          if (keyCode === 37) {
              //left arrow
            moveRight(left + 10);
          } else if (keyCode === 39) {
              //right arrow
            moveRight(left - 10);
          } else if (keyCode === 40) {
              //down arrow
            moveRight(top + 10);
          } else if (keyCode === 38) {
              //up arrow
            moveRight(top - 10);
          }
        
      };
    
    return (
        <div>
            <div className="left-box">
                    <div className="score-board">
                        <h2>Total Weight: {weight} </h2>
                        <h2>Momentum: {momentum} </h2>
                    </div>
                    <div className="boxes">
                        <div className={randomBox} style={mystyle} >
                            {randomWeight} kg
                        </div>
                    </div>
                    <button style={invisibleButtons} onKeyDown={e => move(e)}></button>
                    
                </div>
        </div>
    );
}





export default LeftSide;
