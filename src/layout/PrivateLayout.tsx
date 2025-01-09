import { ALL_ROUTES } from "@constants/common"
import { useAppSelector } from "@hooks/hooks"
import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateLayout: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.common)
  return !isAuthenticated ? (
    <Navigate to={ALL_ROUTES.PUBLIC.LOGIN} />
  ) : (
    <Outlet />
  )
}

export default PrivateLayout
