export default function rem(px: number): `${number}rem` {
  return `${px ? px / 16 : 0}rem`
}
