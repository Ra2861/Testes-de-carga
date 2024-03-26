describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/home/user/')
  })

  it('has the correct title', () => {
    // Passo 1: Inserir o ID da empresa
    cy.get('[data-cy=company-id]').type('fedcbc1a-1953-43dc-8f62-40f91ae5dfb6')

    // Passo 2: Selecionar o arquivo de planilha
    const fixtureFile = 'UsuariosMOCKTrack.xlsx'
    const fileInputElement = '#fileInput'

    cy.get(fileInputElement).attachFile(fixtureFile)

    // Passo 3: Clicar no botão para importar a planilha
    cy.get('[data-cy=import-sheets-btn]').click()
  })
})
