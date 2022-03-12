import chalk from 'chalk'

function Dog(name){
    this.name = name
    this.stomach = []
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
}

Dog.prototype.sayHi = function(){
    console.log('Hi I am a dog n my name is ' + chalk.cyan(this.name))
}

export default Dog
