import { IPost } from '../../interfaces';
import { POST_ACTIONS } from '../action-types';

export interface PostReducerState {
  posts: IPost[];
}

const initialState: PostReducerState = {
  posts: [],
};

const postReducer = (state: PostReducerState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTIONS.GET_ALL_POSTS_START:
      return {
        ...state
      }

    case POST_ACTIONS.GET_ALL_POSTS_ERROR:
      return {
        ...state,
        posts: [],
      }

    case POST_ACTIONS.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
      }

    case POST_ACTIONS.ADD_LIKE_ERROR:
      return {
        ...state
      }

    case POST_ACTIONS.ADD_LIKE_START:
      return {
        ...state,
      }

    case POST_ACTIONS.ADD_LIKE:
      return {
        ...state,
        posts: state.posts?.map((post) => post.id === payload ? { ...post, like: post.like + 1 } : post),
      }

    case POST_ACTIONS.ADD_COMMENT:
      return {
        ...state,
        posts: state.posts?.map((post) => post.id === payload.id ? { ...post, comments: [...post.comments, payload.comment] } : post),
      }
    default:
      return state;
  }
};

export default postReducer;
