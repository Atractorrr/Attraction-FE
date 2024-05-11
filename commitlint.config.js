module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'], // 이슈 참조가 포함되어야 합니다.
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#ATR-'], // 이슈 번호는 '#ATR-'으로 시작해야 합니다.
    },
  },
}
