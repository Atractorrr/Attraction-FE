const ACCESS_MESSAGE: {
  [key: string]: { message: string; type: 'success' | 'info' | 'error' }
} = {
  'register-already': {
    message: '이미 회원가입을 마치셨어요',
    type: 'info',
  },
  register: {
    message: '회원가입을 마저 진행해주세요',
    type: 'error',
  },
  'logout-success': {
    message: '로그아웃에 성공했어요!',
    type: 'success',
  },
  login: {
    message: '이미 로그인을 마치셨어요',
    type: 'info',
  },
  'login-success': {
    message: '로그인에 성공했어요!',
    type: 'success',
  },
  'login-failed': {
    message: '로그인에 실패했어요',
    type: 'error',
  },
  'session-failed': {
    message: '로그인이 만료되었어요',
    type: 'error',
  },
}

export default ACCESS_MESSAGE
