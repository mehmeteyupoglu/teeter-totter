import React, { Component } from 'react';
import { StyledObjects } from "./styles"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"

class ObjectBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <StyledObjects>
                    <div className="main-box">
                        <LeftSide />
                        <RightSide />
                    </div>
                </StyledObjects>
            </div>
        );
    }
}

export default ObjectBox;

