describe('Validações', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
        });
      cy.visit('http://localhost:3000');
      cy.viewport(1920, 1080)
       
    })
  
    it('Validação dos Campos de cadastro do usuário', () => {
      cy.validacaocampos();
    })
    it("Validação dos campos obrigatórios", () => {
     cy.camposobrigatorios();
      
    })
  
    it("Verificação da quantidade de caracteres na senha (8 caracteres necessários)", () => {
      cy.caracteres();
    })
  
    it("Cadastro do usuário válido", () => {
      cy.cadastro();
    })
  
    it("Login Administrador", () => {
      cy.loginadm();
    })
    it("login Usuário normal",() => {
      cy.loginusuario();
    })
  })
  
  

