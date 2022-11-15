// testing routes 

const handlers = require('../handlers/handlers'); 
// handlers imported to test routing.

test('does home page render?', () => {
  const req = {}
  const res = {render:jest.fn()}
  handlers.renderHome(req, res)
  expect(res.render.mock.calls[0][0]).toBe('home')
})



test('does form page render?', () => {
  const req ={}
  const res ={render:jest.fn()}
  handlers.renderForm(req, res) 
  expect(res.render.mock.calls[0][0]).toBe('form')
})

