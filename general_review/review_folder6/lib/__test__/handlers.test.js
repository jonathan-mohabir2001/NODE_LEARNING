// containing two tests for proper route handling. 


const handlers = require('../../handlers/handlers')

test('CHECK if the home page renderes' , () => {
  const req = {}
  // request is a plain body.
  const res = {render:jest.fn()}
  // response assignged rendering a jest function 
  handlers.home(req, res)
  expect(res.render.mock.calls[0][0]).toBe('home')
})

test('CHECK to see about page will render', () => {
  const req = {}
  const res = {render:jest.fn()}

  handlers.about(req, res); 
  expect(res.render.mock.calls[0][0]).toBe('about')
})