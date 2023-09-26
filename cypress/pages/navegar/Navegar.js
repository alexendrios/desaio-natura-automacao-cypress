export default class Navegar {
    visit(url){
        cy.visit(url)
    }

    validarTitulo(tituloEsperado){
        cy.title().should("be.equal", tituloEsperado);
    }
}