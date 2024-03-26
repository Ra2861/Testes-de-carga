export function validationFormatPhoneNumber(phoneNumber: string) {
  // Expressão regular para validar o formato do número de telefone
  const phoneRegex = /^\([1-9]{2}\) 9?[6-9]\d{3}-\d{4}$/
  return phoneRegex.test(phoneNumber)
}
