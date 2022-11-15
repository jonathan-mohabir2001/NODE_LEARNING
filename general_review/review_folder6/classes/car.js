class Car{
  constructor(year, model, make){
    this.year = year; 
    this.model = model; 
    this.make = make; 
  }

  vroom(){
    return(`Vroooom, my year is ${this.year} my model is ${this.model} and my make is ${this.make}`)
  }
}

module.exports =Car; 
// car class exported, able to be imported. 