import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICommonStore, ILogoutPayload } from "@interfaces/common"
import { ESystemLanguages } from "@enums/common"

const initialState: ICommonStore = {
  isExpanded: false,
  isAuthenticated: false,
  isLoadingPage: false,
  apiCount: 0,
  language: ESystemLanguages.EN,
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
    changeSystemLanguage(
      state,
      { payload }: PayloadAction<ESystemLanguages>,
    ): void {
      state.language = payload
    },
  },
})

export const {
  toggleExpand,
  toggleAuthenticated,
  changeSystemLanguage,
  setLoadingPage,
} = commonStore.actions

export default commonStore.reducer
