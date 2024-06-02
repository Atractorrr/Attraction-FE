// export const GOOGLE_OAUTH_URL = new URL(
//   `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_URL}&response_type=code&scope=email profile openid https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/gmail.settings.basic&access_type=offline`,
// )

export const GOOGLE_OAUTH_URL =
  new URL(`https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_URL}&response_type=code&scope=email profile openid https://mail.google.com/%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/gmail.labels%20https://www.googleapis.com/auth/gmail.settings.basic%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile
`)

export const GOOGLE_OAUTH_FORCE_URL =
  new URL(`https://accounts.google.com/o/oauth2/auth?access_type=offline&approval_prompt=force&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=https://main.d35lcnjadi8vq7.amplifyapp.com/api/auth/callback/google&response_type=code&scope=email profile openid https://mail.google.com/%20https://www.googleapis.com/auth/gmail.readonly%20https://www.googleapis.com/auth/gmail.labels%20https://www.googleapis.com/auth/gmail.settings.basic%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile
`)
