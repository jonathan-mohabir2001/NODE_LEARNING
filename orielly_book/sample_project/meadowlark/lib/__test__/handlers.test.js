const handlers = require('../handlers'); 
// handlers imported to be tested. 


test('home page rendering', () => {
  const req = {}
  const res = {render: jest.fn()}
  handlers.home(req, res)

  expect(res.render.mock.calls[0][0]).toBe('home')
})