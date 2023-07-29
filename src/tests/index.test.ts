import { passwordGenerator } from '../index'

describe('passwordGenerator', () => {
  test('should return a number with two digits', () => {
    const password = passwordGenerator(2)
    expect(true).toBe(password.length === 2)
  })
  test('should return a number with five digits', () => {
    const password = passwordGenerator(5)
    expect(true).toBe(password.length === 5)
  })
  test('should return a number with fourteen digits', () => {
    const password = passwordGenerator(14)
    expect(true).toBe(password.length === 14)
  })
  test('should return a number with twenty-two digits', () => {
    const password = passwordGenerator(22)
    expect(true).toBe(password.length === 22)
  })
  test('should return a number with twenty-four digits', () => {
    const password = passwordGenerator(24)
    expect(true).toBe(password.length === 24)
  })
})
