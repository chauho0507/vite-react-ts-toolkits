import requester from "@api/apiClient"
import { ILoginForm } from "@interfaces/auth"
import { AUTH } from "@api/endPoints"

export const authApi = {
  login: (data: ILoginForm) => requester.post(AUTH.LOGIN, data),
  getMe: () => requester.get(AUTH.GET_ME),
}
