export interface IAuthStore {
  isAuthenticated: boolean
  isLoading: boolean
  currentUser: object | null
}

export interface ILoginForm {
  username: string
  password: string
  cb?: () => void
}

export interface ILoginSuccess {
  currentUser: {
    email: string
    first_name: string
    id: number
    is_active: boolean
    is_anonymous: boolean
    last_name: string
    username: string
  }
}
