/* eslint-disable no-console */

import { HttpResponseResolver, HttpResponse, http, delay } from 'msw'

const delayMS = 600
const baseURL = `${process.env.API_URL}/api`

export const get = (path: string, resolver: HttpResponseResolver) =>
  http.get(baseURL + path, async (info) => {
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`)
    await delay(delayMS)
    return resolver(info)
  })

export const post = (path: string, resolver: HttpResponseResolver) =>
  http.post(baseURL + path, async (info) => {
    const body = await info.request.json()
    console.log(`[MSW]: ${info.request.method} ${info.request.url} ✅`)
    console.log(` ﾤ ${JSON.stringify(body)}`)
    await delay(delayMS)
    return resolver(info)
  })

export const error = (message: string, status: number) =>
  HttpResponse.json({ message: `${message} (MSW)` }, { status })

export const getParams = (url: string) => new URL(url).searchParams
