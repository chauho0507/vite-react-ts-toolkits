import { isEmpty, isString } from "lodash"

export const getLocalStorage = (storageKey: string) =>
  localStorage.getItem(storageKey)

export const setLocalStorage = (storageKey: string, value: string) =>
  localStorage.setItem(storageKey, value)

export const clearLocalStorage = (storageKeys: string | string[] = []) => {
  if (isString(storageKeys)) {
    return localStorage.removeItem(storageKeys)
  }

  if (!isEmpty(storageKeys)) {
    return storageKeys.forEach((key) => {
      localStorage.removeItem(key)
    })
  }

  localStorage.clear()
}

export const getCurrentDomain = (): string => {
  const parts = window.location.hostname.split(".")

  return parts.slice(1).join(".")
}

export const parseJwt = <T>(token: string): T | null => {
  if (!token) {
    return null
  }
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}
