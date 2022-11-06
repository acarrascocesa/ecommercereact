/// <reference types="cypress" />
describe("<LoginScreen />", () => {

    //Revisar que existe el form
    it("<LoginScreen /> - Verificar pantalla login", () => {
        cy.visit("http://127.0.0.1:5173/#/login")
        cy.get("[data-cy=form]")

        //Revisar los 2 inputs
        cy.get("[data-cy=email]").should("exist")
        cy.get("[data-cy=password]").should("exist")



        //Revisar boton del formulario
        cy.get("[data-cy=button]").should("exist")
        cy.get("[data-cy=button]").should("have.value", "Login")
    })

    
})