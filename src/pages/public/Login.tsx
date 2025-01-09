import { useAppDispatch } from "@hooks/hooks"
import Button from "@mui/material/Button"
import { loginRequest } from "@redux/slices/authSlice"
import { toggleAuthenticated } from "@redux/slices/commonSlice"
import React from "react"

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(
          toggleAuthenticated({
            isAuthenticated: true,
            cb: () => {},
          }),
        )

        dispatch(
          loginRequest({
            username: "chauhh",
            password: "secret",
            cb: () => {
              console.log("chauhh is here")
            },
          }),
        )
      }}
    >
      Contained
    </Button>
  )
}

export default LoginPage
