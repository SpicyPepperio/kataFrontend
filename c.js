function calculator(string) {
    const digits = {
  Z: 2000,
  M: 2000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}
    function arabToRoman(num) {
  if (num < 1) return ""
  let result = ""
  for (key in digits)
    while (num >= digits[key]) {
      result += key
      num -= digits[key]
    }
  return result
}
function romanToArab(string) {
  return string
    .toUpperCase()
    .split("")
    .reduce((acc, el, ind, arr) => {
      const [a, b, c] = [
        digits[arr[ind]],
        digits[arr[ind + 1]],
        digits[arr[ind + 2]],
      ]
      return b > a ? acc - a : acc + a
    }, 0)
}
  const letter = []
  string = string.replace(/[^IVXLCDMZ\d-+*\/]/gi, (ch) => {
    if (ch !== " ") letter.push(ch)
    return ""
  })
  if (letter.length > 0) throw Error()
  let vars = string.split(/[+\-*\/]/g)
  if (vars.length !== 2) throw Error()
  const isRome = /[IVXLCDMZ]/i
  const r = vars.reduce((s, v) => s + isRome.test(v), 0)
  if (r === 1) throw Error()
  else if (r === 2)
  vars = vars.map((v) => romanToArab(v))
  if (vars.some((v) => v < 1 || v > 10)) throw Error()
  let acr = string.match(/[+\-*\/]/)[0]
  let result = Math.floor(eval(vars.join(acr)))
  return r === 0 ? result.toLocaleString() : arabToRoman(result)
}
