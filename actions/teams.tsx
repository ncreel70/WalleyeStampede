import { TEAMS } from '../constants'

export function changeTeam(team) {
    return{
        type: TEAMS,
        payload: team
    }
}