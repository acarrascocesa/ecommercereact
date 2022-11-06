/// <reference types="cypress" />

describe("<Home />", () => {

    //Revisar que existe la pantalla home
    it("<Home /> - Verificar pantalla Home", () => {
        cy.visit("http://127.0.0.1:5173/#/")
        cy.get("[data-cy=home]")

        //Revisar que el icono AC SHOP exista en Home
        cy.get('.header__title > a')

        //Revisar que componente InputSearch exista en Home
        cy.get(".inputSearch").should("exist")

        //Revisar links a las paginas de Login, Cart y Purchases
        cy.get(':nth-child(1) > .header__link').should("exist")
        cy.get(':nth-child(2) > .header__link').should("exist")
        cy.get(':nth-child(3) > .header__link').should("exist")

        //Revisar que existan los Productos en Home
        cy.get('.header__title > a')
        



        
    })

    
})