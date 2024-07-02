/* eslint-disable no-console */

import { HttpResponseResolver, HttpResponse, http, delay } from 'msw'

const delayMS = 600
const baseURL = `${process.env.MOCK_URL}/api`

export const get = (path: string, resolver: HttpResponseResolver) =>
  http.get(baseURL + path, async (info) => {
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`)
    await delay(delayMS)
    return resolver(info)
  })

export const post = (
  path: string,
  resolver: HttpResponseResolver, // | (() => Promise<HttpResponseResolver>),
) =>
  http.post(baseURL + path, async (info) => {
    const body = await info.request.json()
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`)
    console.log(` ﾤ ${JSON.stringify(body)}`)
    await delay(delayMS)
    // if (
    //   resolver instanceof Object &&
    //   'then' in resolver &&
    //   typeof resolver.then === 'function'
    // ) {
    //   const res = await resolver(info)
    //   return res
    // }
    // TODO: 콜백 함수가 프로미스일 때 처리 로직 추가
    return resolver(info)
  })

export const put = (path: string, resolver: HttpResponseResolver) =>
  http.put(baseURL + path, async (info) => {
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`)
    await delay(delayMS)
    return resolver(info)
  })

export const error = (message: string, status: number) =>
  HttpResponse.json({ message: `${message} (MSW)` }, { status })

export const getParams = (url: string) => new URL(url).searchParams
