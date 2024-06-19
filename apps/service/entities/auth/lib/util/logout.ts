'use client'

export default function logout() {
  return fetch('/api/auth/sign-out', {
    method: 'DELETE',
  }).then(() => window.location.reload())
}
