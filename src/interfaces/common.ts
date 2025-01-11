import { PayloadAction } from "@reduxjs/toolkit"
import { ESystemLanguages } from "src/enums/common"

export interface ICommonStore {
  isExpanded: boolean
  isAuthenticated: boolean
  isLoadingPage: boolean
  apiCount: number
  language: ESystemLanguages
}

export interface IAction<T> extends PayloadAction<T> {
  cb?: () => void
}
// export interface IAction<T> {
//   type: string
//   payload?: T
//   cb?: () => void
// }

export interface ILogoutPayload {
  isAuthenticated: boolean
  cb?: () => void
}
