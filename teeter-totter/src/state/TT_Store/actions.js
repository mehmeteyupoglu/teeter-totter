import * as Actions from "./types"

export const moveRight = (amount) => {
    return {
        type: Actions.MOVE_RIGHT, 
        payload: amount
    }
}

export const moveLeft = (amount) => {
    return {
        type: Actions.MOVE_LEFT, 
        payload: amount
    }
}

export const addToRight = (weight) => {
    return {
        type: Actions.ADD_TO_RIGHT, 
        payload: weight
    }
}

export const addToLeft = (weight) => {
    return {
        type: Actions.ADD_TO_LEFT, 
        payload: weight
    }
}