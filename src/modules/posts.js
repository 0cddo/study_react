// postApi 상태관리 모듈 생성
import * as postsAPI from '../api/posts';
import { createPromiseThunk, reducerUtils } from '../lib/asyncUtils';

// api 요청 위한 액션 생성(3개)
const GET_POSTS = 'GET_POSTS'; // 특정 요청이 시작됐다
const GET_POSTS_SUCCESS = 'GET_POSTS-SUCCESS';
const GET_POSTS_ERROR = 'GET_POST_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// thunk 함수 생성
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

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
        posts: reducerUtils.success(action.payload),
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: reducerUtils.error(action.payload),
      };
    case GET_POST:
      return {
        ...state,
        post: reducerUtils.loading(),
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: reducerUtils.success(action.payload),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        post: reducerUtils.error(action.payload),
      };
    default:
      return state;
  }
}

// * 반복되는 코드 리팩토링 필요!!
