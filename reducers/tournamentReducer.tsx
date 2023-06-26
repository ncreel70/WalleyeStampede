import { TOURNAMENTS } from "../constants";

const initialState = {
    tournament: []
}

const tournamentReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOURNAMENTS:
            return {
                ...state,
                tournament: action.payload
            }
        default:
            return state
    }
}

export default tournamentReducer;