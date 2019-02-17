import { combineReducers } from 'redux';
import CharacterReducer from '../characters/characterReducer';
import GameReducer from '../game/gameReducer';

const rootReducer = combineReducers({
    character: CharacterReducer,
    game: GameReducer
});

export default rootReducer;