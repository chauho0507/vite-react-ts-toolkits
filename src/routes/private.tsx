import { ALL_ROUTES } from "@constants/common"
import PrivateLayout from "@layout/PrivateLayout"
import DashboardPage from "@pages/private/Dashboard"

export const privateRoutes = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: ALL_ROUTES.PRIVATE.DASHBOARD,
        element: <DashboardPage />,
      },
    ],
  },
]
