import { combineReducers } from 'redux';
import CharacterReducer from '../characters/characterReducer';

const rootReducer = combineReducers({
    character: CharacterReducer
});

export default rootReducer;