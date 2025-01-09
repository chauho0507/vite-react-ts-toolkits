import { combineReducers } from "@reduxjs/toolkit"
import commonReducer from "@redux/slices/commonSlice"
import authReducer from "@redux/slices/authSlice"

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
})

export default rootReducer
