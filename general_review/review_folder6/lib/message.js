const  messages = [

  'Whats up dude', 
  'Greetings to u', 
  'Good day', 
  'Random message', 
  'Ambulance '
]


exports.getMessage = () => {
  const idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
  // a get message function to return a random value of the messages array. 
}