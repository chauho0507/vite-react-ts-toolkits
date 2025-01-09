import { useAppDispatch } from "@hooks/hooks"
import { toggleAuthenticated } from "@redux/slices/commonSlice"
import React from "react"

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <h1
      onClick={() => {
        dispatch(
          toggleAuthenticated({
            isAuthenticated: false,
            cb: () => {},
          }),
        )
      }}
    >
      Dashboard
    </h1>
  )
}

export default DashboardPage
