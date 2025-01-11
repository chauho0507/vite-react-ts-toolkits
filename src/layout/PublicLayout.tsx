import React from "react"
import { useAppSelector } from "@hooks/hooks"
import { Navigate, Outlet } from "react-router-dom"
import { ALL_ROUTES } from "@constants/common"
import { Paper } from "@mui/material"

const PublicLayout: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.common)
  return isAuthenticated ? (
    <Navigate to={ALL_ROUTES.PRIVATE.DASHBOARD} />
  ) : (
    <Paper sx={{ px: 8, py: 1, minHeight: "100vh" }}>
      <Outlet />
    </Paper>
  )
}

export default PublicLayout
