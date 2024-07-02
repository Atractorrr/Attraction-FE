export default async function initMSW() {
  const { server } = await import('./server')
  server.listen()
}
