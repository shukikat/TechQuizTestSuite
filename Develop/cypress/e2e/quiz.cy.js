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
   cy.get('button'),contains('Start Quiz').click();
   cy.intercept('GET, /api/question').as('getQuestions')
   cy.wait('@getQuestions');

   cy.get('h2').contains('What is 2 + 2').should('be.visible')


  })


})