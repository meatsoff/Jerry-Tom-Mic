import Mouse from './Mouse'

function Cat() {
    this.stomach = []
}

Cat.prototype.eat = function(food){
    if(food instanceof Mouse){
        this.stomach.push(mouse)
    } else{
        throw new Error('Cat eat mouse here stupid')
    }
}

export default Cat
