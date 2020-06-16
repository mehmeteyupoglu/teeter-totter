import * as Actions from "./types"

export const moveRight = () => {
    return {
        type: Actions.MOVE_RIGHT
    }
}

export const moveLeft = () => {
    return {
        type: Actions.MOVE_LEFT
    }
}

export const drop = () => {
    return {
        type: Actions.DROP
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