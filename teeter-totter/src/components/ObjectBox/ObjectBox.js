import React, { Component } from 'react';
import { StyledObjects } from "./styles"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"



class ObjectBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             leftTotalWeight: 0, 
             rightTotalWeight: 0, 
             rightMomentum: 0, 
             leftMomentum: 0, 
        }
    }

    movePlayer = () => {

    }

    dropPlayer = () => {
        
    }

    move = ({keycode}) => {

        if (keycode === 37) {
            this.movePlayer(-1)
        } else if (keycode === 39) {
            this.movePlayer(1)
        } else if (keycode === 40) {
            this.dropPlayer()
        }
    }
    
    render() {
        const { leftTotalWeight, rightTotalWeight } = this.state
        return (
            <div>
                <StyledObjects>
                    <div className="main-box">
                        <LeftSide leftTotalWeight={leftTotalWeight}/>
                        <RightSide rightTotalWeight={rightTotalWeight}/>
                    </div>
                </StyledObjects>
            </div>
        );
    }
}

export default ObjectBox;

