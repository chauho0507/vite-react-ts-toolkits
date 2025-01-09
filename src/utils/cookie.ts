import Cookies from "universal-cookie"
import { COOKIE_KEYS } from "@constants/common"
import { getCurrentDomain } from "@utils/helper"
import dayjs from "dayjs"

const cookies = new Cookies()
export const cookiesStorage = () => {
  const domain = getCurrentDomain()
  
  return {
    getCookieData(key: string) {
      return cookies.get(key)
    },
    setCookieData(key: string, data: string) {
      const expires = dayjs().add(1, "M").toDate()
      cookies.set(key, data, { domain, expires, path: "/" })
    },

    clearCookieData(key: string) {
      cookies.remove(key, { domain, path: "/" })
    },

    getAccessToken(): string {
      return cookies.get(COOKIE_KEYS.ACCESS_TOKEN)
    },

    setAccessToken(accessToken: string) {
      const expires = dayjs().add(1, "M").toDate()
      cookies.set(COOKIE_KEYS.ACCESS_TOKEN, accessToken, {
        domain,
        path: "/",
        expires,
      })
    },
    clearAccessToken() {
      cookies.remove(COOKIE_KEYS.ACCESS_TOKEN, { domain })
    },

    authenticated() {
      const accessToken = cookies.get(COOKIE_KEYS.ACCESS_TOKEN)
      return !!accessToken
    },
  }
}
