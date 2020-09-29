const Human = require('./human')

describe('Test Human', () => {
    describe('Error Cases', ()=> {
        it('should throw error no firstName provided', () => {
            expect.assertions(1)
            const human = new Human('toto@hotmail.com', '','tata', 10)
            try {
                human.isValid()
              } catch (err) {
                expect(err.message).toEqual('no firstName provided')
            }
        })
        it('should throw error age too low', () => {
            expect.assertions(1)
            const human = new Human('toto@hotmail.com', 'toto','tata', 10)
            try {
                human.isValid()
              } catch (err) {
                expect(err.message).toEqual('age : 10 is too low')
            }
        })
    })
    describe('Success Cases', ()=> {

    })
})