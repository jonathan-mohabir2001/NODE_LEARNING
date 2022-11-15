class Car{
  constructor(year, model, make){
    this.year = year; 
    this.model = model; 
    this.make = make; 
  }

  vroom(){
    return(`<h1>Vroooom, my year is ${this.year} my model is ${this.model} and my make is ${this.make}</h1>`)
  }
}

module.exports =Car; 
// car class exported, able to be imported. 