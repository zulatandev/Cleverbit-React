import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { POST_ACTIONS } from '../action-types';
import { POSTS } from '../constants';
import { IComment } from '../../interfaces';

export const getPosts =
  () =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
  ) => {
    const getPosts = async () => {
      // todo: integrate with API
      return POSTS;
    };

    return dispatch({
      type: POST_ACTIONS.GET_ALL_POSTS,
      payload: getPosts(),
    });
  };

export const addLikeCount =
  (id: number) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: POST_ACTIONS.ADD_LIKE,
      payload: id,
    });
  };

export const addComment = (id: number, comment: IComment) => (dispatch: ThunkDispatch<any, any, any>) => {
  return dispatch({
    type: POST_ACTIONS.ADD_COMMENT,
    payload: { id, comment },
  });
};
