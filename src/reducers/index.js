import { combineReducers } from 'redux-immutable';
import github from './data/githubReducers';
import ui from './ui/uiReducers';

const rootReducers = combineReducers({
  ui,
  github,
});

export default rootReducers;
