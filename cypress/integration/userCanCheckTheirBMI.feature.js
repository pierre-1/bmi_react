describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('/')
		cy.contains('BMI Calculator')
		cy.get('#weight').type('64')
		cy.get('#height').type('169')
		cy.get('#calculate').click()
	})
	it('displays a BMI value of 22.41', () => {
		cy.get('#results').should('contain', '22.41')
	})
	it ('displays a message of you are normal weight', () => {
		cy.get('#results').should('contain', 'normal')
	})
})

