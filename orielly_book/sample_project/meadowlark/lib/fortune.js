const fortunes = [
  'Look up, not down',
  ' Do not Fear what you do not know',
  'You will have a pleasent surprise', 
  'When possible, keep it simple', 
  'keep going my dude',  
  'keep errrr going'
];
// array of messages created. 

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortunes.length)
  return fortunes[idx]
}; 
//exporting get fortune function. 