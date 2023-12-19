import { ALL_ROUTES } from "@constants/common"
import { RouteProps } from "react-router-dom"
import DashboardPage from "@pages/Dashboard"

export const privateRoutes: RouteProps[] = [
  {
    path: ALL_ROUTES.PRIVATE.DASHBOARD,
    element: <DashboardPage />,
  },
]
