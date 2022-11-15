const makeDeveloper = ({firstName, lastName}) => {
  return(`<h1>This guy ${firstName},- ${lastName} is a MERN stack developer!`)
}
// make developer function created. 

const someDude = {
  firstName:"Jonathan",  
  lastName:"Mohabir"
}

exports.module = makeDeveloper(someDude)