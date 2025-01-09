import { STORAGE_KEYS } from "@constants/common"
// import { cookiesStorage } from "@utils/cookie"
import { getLocalStorage } from "@utils/helper"
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios"
import { decamelizeKeys } from "humps"
import { mergeWith } from "lodash"

const urlTokenExcludes = ["auth/login"]

const defaultHeaders = {
  ...axios.defaults.headers,
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: defaultHeaders,
})

const onRequest = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  const newConfig = { ...config }
  if (newConfig.url && !urlTokenExcludes.includes(newConfig.url)) {
    newConfig.headers = mergeWith(
      {
        ...defaultHeaders,
        Authorization: `Bearer ${getLocalStorage(STORAGE_KEYS.AUTH_TOKEN)}`,
      },
      newConfig.headers,
    )
  }
  if (
    newConfig.headers &&
    newConfig.headers["Content-Type"] === "multipart/form-data"
  ) {
    return newConfig as InternalAxiosRequestConfig
  }
  if (config.params) {
    newConfig.params = decamelizeKeys(config.params)
  }
  if (config.data) {
    newConfig.data = decamelizeKeys(config.data)
  }

  return newConfig as InternalAxiosRequestConfig
}

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error)
const onResponse = (response: AxiosResponse): AxiosResponse =>
  response.data as AxiosResponse
const onResponseError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error)

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

const requester = {
  get: (url: string, params?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.get<AxiosResponse>(url, {
      params,
      ...config,
    }),
  post: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.post<AxiosResponse>(url, data, config),
  put: (url: string, data?: unknown, config?: AxiosRequestConfig) =>
    axiosInstance.put<AxiosResponse>(url, data, config),
  delete: (url: string, data?: unknown) =>
    axiosInstance.delete<AxiosResponse>(url, { data }),
}

export default requester
