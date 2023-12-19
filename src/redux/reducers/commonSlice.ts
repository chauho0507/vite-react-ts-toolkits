import { createSlice } from "@reduxjs/toolkit"

import { ICommonStore } from "@interfaces/common"

const initialState: ICommonStore = {
  isExpanded: false,
}

const commonStore = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleExpand: (state) => {
      state.isExpanded = !state.isExpanded
    },
  },
})

export const { toggleExpand } = commonStore.actions

export default commonStore.reducer
