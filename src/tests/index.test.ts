import { passwordGenerator } from '../index'

describe('passwordGenerator', () => {
  test('should return a number with two digits', () => {
    const n = passwordGenerator(2)
    expect(true).toBe(n > 9 && n < 100)
  })
})
