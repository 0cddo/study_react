// postApi 상태관리 모듈 생성
import { dispatch } from 'd3';
import * as postsAPI from '../api/posts';
import { reducerUtils } from '../lib/asyncUtils';

// api 요청 위한 액션 생성(3개)
const GET_POSTS = 'GET_POSTS'; // 특정 요청이 시작됐다
const GET_POSTS_SUCCESS = 'GET_POSTS-SUCCESS';
const GET_POSTS_ERROR = 'GET_POST_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// thunk 함수 생성
export const getPosts = () => async (dispatch) => {
  // 요청이 생성됨
  dispatch({ type: GET_POSTS });
  // API를 호출
  try {
    const posts = await postsAPI.getPosts();
    // 성공했을 때
    dispatch({
      type: GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {
    // 실패했을 때
    dispatch({
      type: GET_POSTS_ERROR,
      error: e,
    });
  }
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const post = await postsAPI.getpost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      post,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_ERROR,
      error: e,
    });
  }
};

// 초기값
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 액션 처리를 위한 리듀서 생성
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: reducerUtils.loading(),
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: reducerUtils.success(action.posts),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.error),
      };
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.post),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}

// * 반복되는 코드 리팩토링 필요!!
