import 'whatwg-fetch';

import { GET_GITHUB_INITIATE, GET_GITHUB_SUCCESS, GET_GITHUB_FAIL, CHAGE_USER_ID } from '../constants/actionTypes';

import { showSpinner, hideSpinner } from './uiActions';

const getGithub = (userId = 'jefferyjeffery') => {
  const ret = (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());

    fetch(`https://api.github.com/users/${userId}`)
    .then((response) => {
      const j = response.json();
      return j;
    })
    .then((json) => {
      dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
      dispatch(hideSpinner());
    })
    .catch((response) => {
      dispatch({ type: GET_GITHUB_FAIL, payload: { data: response.json() } });
    });
  };
  return ret;
};

// 同步 actions 處理，回傳 action 物件
const changeUserId = (text) => ({ type: CHAGE_USER_ID, payload: { userId: text } });

export { getGithub, changeUserId };

