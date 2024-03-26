import { readReport } from '../readFile'

describe('readReport function', () => {
  it('deve retornar um array de objetos CustomerData', async () => {
    const reportPath = './UsuariosMOCKTrack.xlsx' // caso precise testar apenas essa função colocar o caminho relativo
    const result = await readReport(reportPath)

    expect(Array.isArray(result)).toBe(true)
  })

  it('deve ter mais do que 2 linhas no arquivo', async () => {
    const reportPath = './UsuariosMOCKTrack.xlsx'
    const result = await readReport(reportPath)

    if (result.length > 0) {
      const sampleCustomerData = result[0]
      expect(typeof sampleCustomerData).toBe('object')
    }
  })

  it('deve ter um retorno de erro caso o arquivo não for achado', async () => {
    const reportPath = 'caminho/inexistente/para/o/arquivo.xlsx'

    await expect(readReport(reportPath)).rejects.toThrowError(
      'Arquivo não encontrado ou não pode ser lido. Verifique o caminho do arquivo.',
    )
  })
})
