import { validationLogicalsIfs, values } from '../validationLogicalIfs'

describe('validationLogicalsIfs function', () => {
  it('deve passar sem lançar erro para um array de valores verdadeiros', () => {
    const values = [
      { validations: true, msgError: 'Erro 1' },
      { validations: 42, msgError: 'Erro 2' },
      { validations: 'Valid', msgError: 'Erro 3' },
      { validations: { prop: 'value' }, msgError: 'Erro 4' },
      { validations: true, msgError: 'Erro 5' },
    ]

    expect(() => validationLogicalsIfs(values)).not.toThrow()
  })

  it('deve lançar um erro para um valor falso no array', () => {
    const values = [
      { validations: true, msgError: 'Erro 1' },
      { validations: false, msgError: 'Erro 2' }, // Valor falso
      { validations: 'Valid', msgError: 'Erro 3' },
    ]

    expect(() => validationLogicalsIfs(values)).toThrowError('Erro 2')
  })

  it('deve lançar um erro se qualquer valor for null', () => {
    const values = [
      { validations: true, msgError: 'Erro 1' },
      { validations: null, msgError: 'Erro 2' }, // Valor nulo
      { validations: 'Valid', msgError: 'Erro 3' },
    ]

    expect(() => validationLogicalsIfs(values)).toThrowError('Erro 2')
  })

  it('deve passar sem lançar erro se o array de valores for vazio', () => {
    const values: Array<values> = [] // Array vazio

    expect(() => validationLogicalsIfs(values)).not.toThrow()
  })

  it('deve lançar um erro se a mensagem de erro for indefinida', () => {
    const values: Array<values> = [
      { validations: true, msgError: 'Erro 1' },
      { validations: false, msgError: 'undefined' }, // Mensagem de erro indefinida
      { validations: 'Valid', msgError: 'Erro 3' },
    ]

    expect(() => validationLogicalsIfs(values)).toThrowError()
  })
})
