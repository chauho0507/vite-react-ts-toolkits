import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ICommonStore, ILogoutPayload } from "@interfaces/common"

const initialState: ICommonStore = {
  isExpanded: false,
  isAuthenticated: false,
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
  },
})

export const { toggleExpand, toggleAuthenticated } = commonStore.actions

export default commonStore.reducer
