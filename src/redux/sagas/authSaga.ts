import { put, call, takeLatest } from "redux-saga/effects"
import { loginRequest, loginFailed } from "@redux/slices/authSlice"
import { IAction } from "@interfaces/common"
import { ILoginForm } from "@interfaces/auth"
import { setLocalStorage } from "@utils/helper"
import { STORAGE_KEYS } from "@constants/common"
import { authApi } from "@api/auth"

function* loginSaga({ payload }: IAction<ILoginForm>): any {
  const { cb, ...data } = payload

  try {
    const response = yield call(authApi.login, data)
    yield setLocalStorage(STORAGE_KEYS.AUTH_TOKEN, JSON.stringify(data))
    cb?.()
  } catch (error: unknown) {
    yield put(loginFailed())
  }
}

export function* authSaga(): any {
  yield takeLatest(loginRequest, loginSaga)
}

// const { setAccessToken, setCookieData } = cookiesStorage()
// if (!isEmpty(response)) {
//   const { accessToken = "", refreshToken = "" } = response
//   setAccessToken(accessToken)
//   setCookieData(COOKIE_KEYS.REFRESH_TOKEN, refreshToken)
//   const userInfo = parseJwt<ILoginSuccess>(accessToken)
//   if (!isEmpty(userInfo)) {
//     yield put(loginSuccess(userInfo))
//   }
// } else {
// }
