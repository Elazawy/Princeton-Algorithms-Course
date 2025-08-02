
var Stack = function() {
    this.elems = [];
    this.maxs = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
Stack.prototype.push = function(x) {
    this.elems.push(x);
    if(this.maxs.length == 0 || x >= this.maxs[this.maxs.length - 1]){
        this.maxs.push(x);
    }
};

/**
 * @return {number}
 */
Stack.prototype.pop = function() {
    if(this.elems.pop() == this.maxs[this.maxs.length - 1]){
        this.maxs.pop();
    }
};

/**
 * @return {boolean}
 */
Stack.prototype.empty = function() {
    return this.elems.length == 0;
};
/**
 * @return {number}
 */
Stack.prototype.maximun = function() { 
    return this.maxs[this.maxs.length - 1];
}

s = new Stack();

s.push(4);
s.push(5);
console.log(s.maximun());
s.push(3);
s.push(1);
s.push(2);
s.push(9);
console.log(s.maximun());
s.pop();
s.pop();
console.log(s.maximun());
