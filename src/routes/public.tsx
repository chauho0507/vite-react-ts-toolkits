import { ALL_ROUTES } from "@constants/common"
import PublicLayout from "@layout/PublicLayout"
import LoginPage from "@pages/public/Login"
import { RouteObject } from "react-router-dom"

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: ALL_ROUTES.PUBLIC.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]
