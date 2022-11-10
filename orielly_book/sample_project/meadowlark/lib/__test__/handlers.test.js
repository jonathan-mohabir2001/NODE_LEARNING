const handlers = require('../handlers'); 
// the code to be tested must be imported. 
// in our case we are testing an aspect of the handlers file. 
test('home page rendering...', () => {
// test method called with description, each test has one. 
// then a listener is written and then an arrow function. 
  const req = {}; 
  const res = {render:jest.fn()}
  // request and response objects are needed. Request is empty
  
  handlers.home(req, res)
  expect(res.render.mock.calls[0][0].toBe('home'))
})
