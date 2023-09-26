export default class CadastroNatura {

    preencherForm(mapeamento, user){
        cy.get(mapeamento.btnAcepptCokies).click();
        cy.get(mapeamento.btnMenu).click();
        cy.contains("a", "Cadastrar-se").click();
        cy.wait(5000);
        cy.get(mapeamento.formInputFistName).type(user.firstName);
        cy.get(mapeamento.formInputLastName).type(user.lastName);
        cy.get(mapeamento.formInputEmail).type(user.email);
        cy.get(mapeamento.formInputSenha).type(user.senha);
        cy.get(mapeamento.formInputConfirmeSenha).type(user.senha);
        cy.get(mapeamento.formInputCpf).type(user.cpf);
        cy.get(mapeamento.formInputDataNascimento).type(user.dataNascimento);
        cy.contains(
          "span",
          mapeamento.obs_SMS
        ).click();
        cy.get(mapeamento.formInputTelefone).type(user.telefone);
        cy.get(mapeamento.radioButtonMasculino).check();
        cy.get(mapeamento.aceiteTermo).click();
        cy.get(mapeamento.buttonSubmit).click();
        cy.wait(5000);
        cy.get(mapeamento.btnMenu).click();

        // Adicione verificações aqui para validar o comportamento esperado
        cy.get(mapeamento.identificacaoUsuario).contains(user.firstName)
      
    }
}