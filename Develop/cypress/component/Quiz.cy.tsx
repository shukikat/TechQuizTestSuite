import {mount} from 'cypress/react'
//import React from 'react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
  // cy.intercept({
  //   method:'GET',
  //   url:'/api/questions'
  // },
  // {
  //   fixture:'questions.json',
  //   statusCode: 200
  // }).as('getQuestions');

  it('should render the "Start Quiz" button', () => {
    // see: https://on.cypress.io/mounting-react
     mount(<Quiz />);
     cy.intercept({
      method:'GET',
      url:'/api/questions'
    },
    {
      fixture:'questions.json',
      statusCode: 200
    }).as('getQuestions');
     cy.get('button').contains('Start Quiz').should('be.visible')
  });

  

  it('quiz will start when button is clicked', () => {
       mount(<Quiz/>)
       
       cy.get('button').contains('Start Quiz').click()
       cy.get('button').contains('Start Quiz').should('not.exist')

      });

     
    it('question page will display question and answers' , ()=> {
      mount(<Quiz/>);
   
      cy.get('button').contains('Start Quiz').click()
      cy.wait('@getQuestions');
      cy.get('h2').contains('What is 2 +2?').should('be.visible')
      cy.get('button').contains('1').should('be.visible')
      cy.get('button').contains('2').should('be.visible')
      cy.get('button').contains('3').should('be.visible')
      cy.get('button').contains('4').should('be.visible')
      
    });

    it('finish quiz page wll display when all questions are complete', ()=> {
      mount(<Quiz/>);
      cy.get('button').contains('Start Quiz').click()
      cy.wait('@getQuestions')
      cy.get('button').contains('2').click() //correct answer
      cy.get('button').contains('3').click() //correct answer
      cy.get('h2').contains('Quiz completed').should('be.visible')
      cy.get('div').contains('Your score').should('be.visible')
      cy.get('button').contains('Take New Quiz').should('be.visible')

    });

    it('new quiz will start when take new quiz button is clicked', ()=> {
      mount(<Quiz/>)
      cy.get('button').contains('Start Quiz').click()
      cy.get('button').contains('2').click() 
      cy.get('button').contains('4').click()
      cy.get('button').contains('Take New Quiz').click()
      cy.get('button').contains('Take New Quiz').should('not.exist')

    })

  });




    

  