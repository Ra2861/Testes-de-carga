import { validationFormatPhoneNumber } from '../validationFormatPhoneNumber'

describe('validationFormatPhoneNumber function', () => {
  it('deve retornar true para um número de telefone válido', () => {
    const validPhoneNumber = '(99) 98765-4321'
    expect(validationFormatPhoneNumber(validPhoneNumber)).toBe(true)
  })

  it('deve retornar false para um número de telefone com formato inválido', () => {
    const invalidPhoneNumber = '(99) 1234-5678'
    expect(validationFormatPhoneNumber(invalidPhoneNumber)).toBe(false)
  })

  it('deve retornar true para um número de telefone sem nono dígito opcional', () => {
    const phoneNumberWithoutOptionalDigit = '(99) 8765-4321'
    expect(validationFormatPhoneNumber(phoneNumberWithoutOptionalDigit)).toBe(
      true,
    )
  })
})
