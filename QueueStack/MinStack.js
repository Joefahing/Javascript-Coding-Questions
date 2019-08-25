function MinStack(){
    this.min = Number.MAX_SAFE_INTEGER;
    this.stack = [];
}

MinStack.prototype.minVal = function(){
    return this.stack.length > 0 ? this.min : null;
}

MinStack.prototype.push = function(value){
    if(this.min > value){
        this.min = value;
    }

    this.stack.push(value);
}

MinStack.prototype.pop = () =>{
    return this.stack.pop();
}

MinStack.prototype.pushAll = function(...values){
    for(const value of values){
        if(this.min > value){
            this.min = value;
        }
        this.stack.push(value);
    }
}

module.exports = {
    MinStack,
}

