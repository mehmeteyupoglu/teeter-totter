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