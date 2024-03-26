import { validateEmail } from '../validationEmail'

describe('validateEmail function', () => {
  it('deve retornar true para um e-mail válido', () => {
    const validEmail = 'example@example.com'
    expect(validateEmail(validEmail)).toBe(true)
  })

  it('deve retornar false para um e-mail sem "@"', () => {
    const invalidEmail = 'invalidemail.com'
    expect(validateEmail(invalidEmail)).toBe(false)
  })

  it('deve retornar false para um e-mail sem domínio', () => {
    const invalidEmail = 'example@'
    expect(validateEmail(invalidEmail)).toBe(false)
  })

  it('deve retornar false para um e-mail sem parte local', () => {
    const invalidEmail = '@example.com'
    expect(validateEmail(invalidEmail)).toBe(false)
  })

  it('deve retornar false para um e-mail com domínio inválido', () => {
    const invalidEmail = 'example@example'
    expect(validateEmail(invalidEmail)).toBe(false)
  })

  it('deve retornar false para um e-mail com espaços em branco', () => {
    const invalidEmail = 'example @ example.com'
    expect(validateEmail(invalidEmail)).toBe(false)
  })
})
