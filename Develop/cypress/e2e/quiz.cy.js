describe('Quiz End-To-End', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:3000/');
    cy.intercept({
        method:'GET',
        url:'api/question'
    }, 

    {
      fixture: 'questions.json',
      statusCode:200

    }
    ).as('getQuestions')


  });

  it('should allow a user to complete the quiz', ()=> {
   cy.get('button').contains('Start Quiz').click();
   cy.wait('@getQuestions');
  
   cy.get('h2').contains('What is 2 + 2').should('be.visible');
   cy.get('button').contains('2').click();

   cy.wait('@getQuestions');
   cy.get('h2').contains('What is the capital of France?').should('be.visible');
   cy.get('button').contains('3').click();
   
   cy.get('h2').contains('Quiz Completed').should('be.visible');
   cy.get('div').contains('Your score').should('be.visible');
   cy.get('button').contains('Take New Quiz').should('be.visible');
  }); 

  it('should allow the user to start a new quiz', ()=> {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.get('button').contains('2').click();
    cy.wait('@getQuestions');
    cy.get('button').contains('3').click();
    cy.get('button').contains('Take New Quiz').click();

    cy.get('button').contains('Start Quiz').should('be.visible');


  });


});