import { describe } from "mocha"
import { it } from "mocha"

  

describe('registration', () => {
    it('from_sign_in', () => {
      cy.visit('https://premeetportal.uat.sjp.digitalclipboard.com/signup')
    })

    it('firstbtn', () => {

        cy.get('input').eq(0).type("Akaki Devidze")
        cy.get('input').eq(1).type("akaki.devidze@sjp.co.uk")
        cy.get('input').eq(2).type("P59634")
        cy.get('input').eq(3).type("Kutuebi1@3")
        cy.contains('Continue').click()
        cy.wait(4000)
    })
})


describe('search', () => {
    it('practice', () => {
        cy.get('input').eq(0).click()
        cy.get('input').eq(0).type("Mike Atkins")
        cy.wait(2000)
        cy.contains('Mike Atkins').click()
        cy.wait(2000)
        cy.get('#termscheckbox').click()
        cy.get('#generaldatacheckbox').click()
        cy.wait(2000)
        cy.contains('Join').click()
        cy.wait(5000)
        cy.contains('CREATE ACCOUNT').click()
    })
}) 

  
// describe('select', () => {
//     it('secselect', () => {

//     })
// })


describe('tick', () => {
   
    // it('tickone', () => {
    //     cy.get('#termscheckbox').click()
    //     cy.get('#generaldatacheckbox').click()


    // })

    // it('ticktwo', () => {
    //     cy.get('.sc-eSxRXt')
    //     .eq(1).click()
    // })



     // cy.contains('Join').click()
})

  // it('tickone', () => {
    //     cy.get('.sc-eSxRXt')
    //     .eq(0).click()
    // })

    // it('ticktwo', () => {
    //     cy.get('.sc-eSxRXt')
    //     .eq(1).click()
    // })



     // cy.contains('Join').click()