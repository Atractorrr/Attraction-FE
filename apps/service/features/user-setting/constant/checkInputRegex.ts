const KOREAN_ONLY_REGEX = /^[가-힣]+$/
const ENGLISH_REGEX = /^[a-zA-Z]+$/
const SPECIAL_CHARACTER_REGEX = /[^a-zA-Z0-9가-힣_]/
const NUMBER_ONLY_REGEX = /^\d+$/
const ENGLISH_LIMIT_REGEX = /^.{4,20}$/
const KOREAN_LIMIT_REGEX = /^.{2,20}$/

export {
  ENGLISH_LIMIT_REGEX,
  ENGLISH_REGEX,
  KOREAN_LIMIT_REGEX,
  KOREAN_ONLY_REGEX,
  NUMBER_ONLY_REGEX,
  SPECIAL_CHARACTER_REGEX,
}
