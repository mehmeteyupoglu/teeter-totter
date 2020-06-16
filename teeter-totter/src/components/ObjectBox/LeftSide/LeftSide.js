import React from 'react';

const LeftSide = () => {
    return (
        <div>
            <div className="left-box">
                    <div className="score-board">
                        <h2>Total Weight: </h2>
                        <h2>Momentum: </h2>
                    </div>
                    <div className="boxes">
                        <div className="triangle-up">3kg</div>
                        <div className="circle">5kg</div>
                        <div className="rectangle">7kg</div>
                    </div>
                </div>
        </div>
    );
}

export default LeftSide;
