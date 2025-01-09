import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IAuthStore, ILoginForm, ILoginSuccess } from "@interfaces/auth"

const initialState: IAuthStore = {
  isAuthenticated: false,
  currentUser: null,
  isLoading: false,
}

const authStore = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state, _action: PayloadAction<ILoginForm>) {
      state.isLoading = true
    },
    loginSuccess(state, _action: PayloadAction<ILoginSuccess>) {
      state.isLoading = false
    },
    loginFailed(state) {
      state.isLoading = false
    },
  },
})

export const { loginRequest, loginSuccess, loginFailed } = authStore.actions

export default authStore.reducer
