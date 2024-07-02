/* eslint-disable no-console */
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log(
          '[PWA] Service Worker successfully registered:',
          registration,
        )
      })
      .catch((error) => {
        console.log('[PWA] Failed to register Service Worker:', error)
      })
  }
}

export const requestNotificationPermission = () => {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('[PWA] Push notify permission is granted')
      } else {
        console.log('[PWA] Push notify permission is rejected')
      }
    })
  }
}

export const sendPushNotification = (title: string, body: string) => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification(title, {
        body,
        icon: '/icons/icon_shadow.png',
      })
    })
  }
}
