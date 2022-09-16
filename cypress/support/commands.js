import { faker } from '@faker-js/faker';

Cypress.Commands.add('validacaocampos', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//a[contains(text(),'Clique aqui')]").click();
    cy.xpath("//label[contains(text(),'Nome')]").should("have.text", "Nome");
    cy.xpath("//label[contains(text(),'Sobrenome')]").should("have.text", "Sobrenome");
    cy.xpath("//label[contains(text(),'E-mail')]").should("have.text", "E-mail");
    cy.xpath("//label[contains(text(),'Senha')]").should("have.text", "Senha");
    cy.xpath("//label[contains(text(),'Confirmar senha')]").should("have.text", "Confirmar senha");
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").should("be.visible");
})

Cypress.Commands.add('camposobrigatorios', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//a[contains(text(),'Clique aqui')]").click();
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").click();
    cy.xpath("//span[contains(text(),'O campo nome é obrigatório!')]").should('have.text', 'O campo nome é obrigatório! ');
    cy.xpath("//span[contains(text(),'O campo sobrenome é obrigatório')]").should('have.text', 'O campo sobrenome é obrigatório');
    cy.xpath("//span[contains(text(),'O e-mail precisa ser válido')]").should('have.text', 'O e-mail precisa ser válido');
    cy.xpath("//span[contains(text(),'A senha deve ter no minimo 8 caracteres')]").should("have.text", "A senha deve ter no minimo 8 caracteres");
    
})

Cypress.Commands.add('caracteres', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//a[contains(text(),'Clique aqui')]").click();
    cy.xpath("//input[@id='nome-id']").type(faker.name.firstName());
    cy.xpath("//input[@id='sobrenome-id']").type(faker.name.lastName());
    cy.xpath("//input[@id='email-id']").type(faker.internet.email());
    cy.xpath("//input[@id='senha-id']").type("123456");
    cy.xpath("//input[@id='senhaConfim-id']").type("123456");
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").click();
    cy.xpath("//span[contains(text(),'A senha deve ter no minimo 8 caracteres')]").should("be.visible")
  })
  Cypress.Commands.add('cadastro', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//a[contains(text(),'Clique aqui')]").click();
    cy.xpath("//input[@id='nome-id']").type(faker.name.firstName('female'));
    cy.xpath("//input[@id='sobrenome-id']").type(faker.name.lastName());
    cy.xpath("//input[@id='email-id']").type(faker.internet.email());
    cy.xpath("//input[@id='senha-id']").type(faker.internet.password(8));
    cy.xpath("//input[@id='senhaConfim-id']").type(faker.internet.password(8));
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").click();
  })
  Cypress.Commands.add('loginadm', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//input[@id='email-id']").type('pamdeornellas@gmail.com');
    cy.xpath("//input[@id='senha-id']").type('123456789')
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").click();
    cy.xpath("//header/div[3]/form[1]/button[1]/img[1]").click();
  })
  Cypress.Commands.add('loginusuario', () => {
    cy.xpath("//header/ul[2]/li[3]/a[1]/img[1]").click();
    cy.xpath("//input[@id='email-id']").type('usertest@mailinator.com');
    cy.xpath("//input[@id='senha-id']").type('12345678')
    cy.xpath("//body/main[1]/section[1]/form[1]/input[1]").click();
    cy.xpath("//header/ul[2]/li[3]/div[1]/div[1]/form[1]/button[1]/img[1]").click();
  })