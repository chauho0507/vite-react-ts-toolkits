import { ALL_ROUTES } from "@constants/common"
import PublicLayout from "@layout/PublicLayout"
import LoginPage from "@pages/public/LoginPage"
import HomePage from "@pages/public/HomePage"
import { RouteObject } from "react-router-dom"

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ALL_ROUTES.PUBLIC.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]
