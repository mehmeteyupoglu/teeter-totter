import * as Actions from "./types"

const initialState = {
    leftTotalWeight: 0, 
    rightTotalWeight: 0, 
    rightMomentum: 0, 
    leftMomentum: 0, 
    position: null, 
}

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        
        case Actions.DROP: 
            return {
                ...state
            }
        case Actions.MOVE_LEFT: 
            return {
                ...state, position: action.payload
            }
        case Actions.MOVE_RIGHT: 
            return {
                ...state, position: action.payload
            }
        default: 
            return state
    }
}

export default appReducer