const handlers = require('../handlers'); 
// handlers imported to be tested. 


test('home page rendering', () => {
  const req = {}
  const res = {render: jest.fn()}
// response is going to conduct a jest function 
  handlers.about(req, res)
  // route to send the correct, page. 
  expect(res.render.mock.calls[0][0]).toBe('home')
  // this is the testing statement. 
})

test('about page with a fortune to be returned...?', () => {
  const req = {}
  // empty request body created. 
  const res = {render: jest.fn()}
  // response sends a jest.function 
  handlers.about(req, res)
  // the handlers is called but then returns 
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('about')
})

test('404 handler renders?', () => {
  const req = {}
  const res = {render: jest.fn()}
  handlers.notFound( req, res)
  expect (res.render.mock.calls.length).toBe(1)
  expect (res.render.mock.calls[0][0]).toBe('404')
})

test('505 error handling renders?', () => {
  const req = {}
  const res = {render: jest.fn()}
  const err = new Error('got an error!')
  handlers.serverError(err, req, res)

  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('500')

})