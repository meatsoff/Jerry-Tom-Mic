import Dog from './Dog.js';
import Cat from './Cat.js';
import Mouse from './Mouse.js';

var Mic = new Dog('Mic')
var Tom = new Cat()
var Jerry = new Mouse('Jerry')
try {
    Tom.eat(Jerry);
} catch (error) {
    console.log('Cat can not eat dog stupid')
}
console.log(Tom)
