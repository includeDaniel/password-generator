// the parameter 'number' is the amount of digits you want your password to be

export function passwordGenerator(number: number) {
  let password = ''
  for (let i = 1; i <= number; i++) {
    const n = Math.floor(Math.random() * 9)
    const nString = n.toString()
    password += nString
  }
  return password
}
