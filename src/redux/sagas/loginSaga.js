import { call, put, takeLatest } from "redux-saga/effects";
import * as type from "./../TypeAction";
import axios from "axios";

import { loginSucced, loginFailed } from "./../actions/index";

const apiUrl = "https://5f854efbc29abd00161905ac.mockapi.io/user";


export function* signInSaga(action) {
  try {
    const response = yield call(axios.request, ({
      url: apiUrl,
      method: 'POST',
      body: {
          username: action.payload.username,
          password: action.payload.password,
      }
  }))

    if(response){
      yield put(loginSucced(response.data.token))
    }
      
    
  } catch (error) {
      yield put(loginFailed(error))
  }
}

export default function* loginSaga() {
  yield takeLatest(type.LOGIN_REQUESTED, signInSaga);
}


