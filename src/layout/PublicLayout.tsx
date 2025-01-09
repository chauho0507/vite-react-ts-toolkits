import React from "react"
import { useAppSelector } from "@hooks/hooks"
import { Navigate, Outlet } from "react-router-dom"
import { ALL_ROUTES } from "@constants/common"

const PublicLayout: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.common)
  return isAuthenticated ? (
    <Navigate to={ALL_ROUTES.PRIVATE.DASHBOARD} />
  ) : (
    <Outlet />
  )
}

export default PublicLayout
