import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ICommonStore, ILogoutPayload } from "@interfaces/common"

const initialState: ICommonStore = {
  isExpanded: false,
  isAuthenticated: false,
  isLoadingPage: false,
  apiCount: 0,
}

const commonStore = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleExpand(state) {
      state.isExpanded = !state.isExpanded
    },
    toggleAuthenticated(
      state,
      { payload: { isAuthenticated, cb } }: PayloadAction<ILogoutPayload>,
    ) {
      state.isAuthenticated = isAuthenticated
      cb?.()
    },
    setLoadingPage(state, { payload }: PayloadAction<boolean>): void {
      if (payload) {
        state.apiCount += 1
      } else {
        state.apiCount -= 1
      }
      state.isLoadingPage = state.apiCount > 0
    },
  },
})

export const { toggleExpand, toggleAuthenticated } = commonStore.actions

export default commonStore.reducer
