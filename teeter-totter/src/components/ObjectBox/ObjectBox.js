import React from 'react';
import { StyledObjects } from "./styles"

const ObjectBox = () => {
    return (
        <div>
            <StyledObjects>
            <div className="main-box">
                <div className="left-box">
                    <div className="triangle-up">3kg</div>
                    <div className="square">5kg</div>
                    <div className="rectangle">7kg</div>
                </div>
                <div className="right-box">Right Box</div>
            </div>
                
                
            </StyledObjects>
        </div>
    );
}

export default ObjectBox;
