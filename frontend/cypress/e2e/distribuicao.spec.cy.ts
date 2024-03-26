describe('Seleção do canal de distribuição de pesquisa', () => {
    it('Selecionar WhatsApp como canal de distribuição', () => {
      cy.visit('http://localhost:5173/home/search');
      cy.wait(5000);
      cy.get('.newSearchButton').should('be.visible').click();
      cy.wait(5000);
      cy.contains('label', 'Whatsapp').prev('input[type="radio"]').check();
      cy.get('button').contains('Confirmar').click();
    });
  });
  