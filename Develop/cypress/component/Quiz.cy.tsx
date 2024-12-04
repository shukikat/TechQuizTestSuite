import {mount} from 'cypress/react'
import React from 'react'
import Quiz from '../../client/src/components/Quiz'


describe('Quiz', () => {
  it('should render the "Start Quiz" button', () => {
    // see: https://on.cypress.io/mounting-react
     mount(<Quiz />)
     cy.get('button').contains('Start Quiz').should('be.visible')
  })

  it('quiz will start when button is clicked', () => {
       mount(<Quiz/>)
       cy.get('button').contains('Start Quiz').should('be.visible')
       cy.get('button').contains('Start Quiz').click()
       cy.get('button').contains('Start Quiz').should('not.exist')

  })
})