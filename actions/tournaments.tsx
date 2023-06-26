import { TOURNAMENTS } from '../constants'

export function changeTournament(tournament) {
    return{
        type: TOURNAMENTS,
        payload: tournament
    }
}