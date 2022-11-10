const handlers = require('../handlers'); 
// handlers imported to be tested. 


test('home page rendering', () => {
  const req = {}
  const res = {render: jest.fn()}
// response is going to conduct a jest function 
  handlers.home(req, res)
  // route to send the correct, page. 
  expect(res.render.mock.calls[0][0]).toBe('home')
  // this is the testing statement. 
})


test('Is fortune rendered with about page' , () => {
  const req = {}
  const res = {render: jest.fn()}
  handlers.about(req, res) 

  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls).toBe('about')
})