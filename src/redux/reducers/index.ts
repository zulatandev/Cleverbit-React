import { combineReducers } from 'redux';
import postReducer, { PostReducerState } from './post.reducer';

export interface RootState {
  postReducer: PostReducerState;
}

const rootReducer = combineReducers<RootState>({
  postReducer,
});

export default rootReducer;
