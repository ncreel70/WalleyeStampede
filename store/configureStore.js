import { createStore, combineReducers } from 'redux';

import tournamentReducer from '../reducers/tournamentReducer';
import teamReducer from '../reducers/teamReducer';

const rootReducer = combineReducers({
    tournament: tournamentReducer,
    team: teamReducer,
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
