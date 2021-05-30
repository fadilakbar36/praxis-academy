// Make a math module class

class math{
    constructor(x,y){
        this.x = x;
        this.y = y;
        //this.sum = (x,y) => {
        //    return x + y; 
        //}
        //this.sub = (x,y) => {
        //  return x - y;
        //}
    } 
    findSum(){
        //return this.sum(a,b);
        return this.x + this.y;
    }
    findSub(){
        //return this.sub(a,b);
        return this.x - this.y;
    }
}

module.exports = {
    Math : Math
}
