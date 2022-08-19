import ExamplePage from "../page/ExamplePage";

describe('Your first test', ()=> { //test suite
    it('Verify element page', function () {
        //visit web
        //cy.visit('/')
        cy.visit('/')

        //verify web "Koligrum Web Playground"
        cy.get('h1').should($text => {
                expect($text).to.contain('Koligrum Web Playground')
            })

        //verify progress
        cy.get('[role=progressbar]')
            .should('be.visible')
            .and($text => {
                expect($text).to.contain('1 / 10')
            })

        //verify quotes textbox
        cy.get('#inputQuote')
            .should("be.visible")
    });
});

describe('Cypresss Basic 2', ()=> {

    it('Verify list of option', function() {
    //visit web
    cy.visit('/')

    //get list of option
    const optionList = ["White", "Yellow", "Cyan", "Magenta", "Blue"];
    cy.get('select.form-control > option')
        .should($list => {
            //check total list 5
            expect($list).to.have.length(5)

            //get value of option
            for(let i = 0; i < $list.length; i++) {
                expect($list.eq(i)).to.contain(optionList[i])
            }
        })
    });

    it('Check Input', function() {
    //visit web
    cy.visit('/')

    //input at least 3 quote
    let i = 0;
    let n = 3;
    let arrayInput = [];
    while(i < n) {
        //input quote
        let temp = "Quote " + (i + 1)
        arrayInput.push(temp)
        cy.get('#inputQuote').type(temp);

        //pilih warna
        cy.get('#colorSelect')
            .select(i)

        //click Add Quote button
        cy.get('#buttonAddQuote')
            .click()
        
        i++
    }
    //verify Grid View

    //verify jumlah quote benar
    cy.get('p[name=quoteText]').should('have.length', 4)

    //verify quote yg dimasukkan benar
    cy.get('p[name="quoteText"]').then($listQuotes => {
        for (let j = 0; j < arrayInput.length; j++) {
            expect($listQuotes.eq(j+1)).to.contain(arrayInput[j])
            
        }
    })

    //verify table ada
    cy.get('#tableView').click()

    //hover button table view
    cy.get('#buttonShowTable').trigger('mouseover')

    //verify isi tabel quotes
    const optionTable = ["You Can do it!!!", "Quote 1", "Quote 2", "Quote 3"]
    cy.get('td[name=tableColumnQuote]')
        .should('be.visible')
        .should($listQuotesTable => {
            expect($listQuotesTable).to.have.length(4)

            //get value of option
            for(let h = 0; h < $listQuotesTable.length; h++) {
                expect($listQuotesTable.eq(h)).to.contain(optionTable[h]);
            }
        })
        
    //verify isi tabel color
    const optionTableColor = ["white", "White", "Yellow", "Cyan"]
    cy.get('td[name=tableColumnColor]')
        .should('be.visible')
        .should($listQuotesTable => {
            expect($listQuotesTable).to.have.length(4)

            //get value of option
            for(let k = 0; k < $listQuotesTable.length; k++) {
                expect($listQuotesTable.eq(k)).to.contain(optionTableColor[k]);
            }
        })

    //hover button table view
    cy.get('#buttonHideTable').trigger('mouseover')

    //click button click show button after 10 s
    cy.get('#buttonShowAfterTen').click()

    })
});