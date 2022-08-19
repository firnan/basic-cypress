class ExamplePage {
    inputQuote(quote) {
        cy.get('#inputQuote')
            .type(quote)
    }

    selectQuote(option) {
        cy.get('#colorSelect')
            .select(option)
    }

    clickButton() {
        cy.get('#buttonAddQuote')
        .click()
    }

    
}