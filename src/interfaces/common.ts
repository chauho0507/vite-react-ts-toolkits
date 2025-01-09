import { PayloadAction } from "@reduxjs/toolkit"

export interface ICommonStore {
  isExpanded: boolean
  isAuthenticated: boolean
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
