// 用两个栈实现队列
// 请用栈实现一个队列，支持如下四种操作：
// push(x) – 将元素x插到队尾；
// pop() – 将队首的元素弹出，并返回该元素；
// peek() – 返回队首元素；
// empty() – 返回队列是否为空；
// 注意：
// 你只能使用栈的标准操作：push to top，peek/pop from top, size 和 is empty；
// 如果你选择的编程语言没有栈的标准库，你可以使用list或者deque等模拟栈的操作；
// 输入数据保证合法，例如，在队列为空时，不会进行pop或者peek等操作；
// 样例
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack = [...this.stack, x];
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.stack.length) {
        return null;
    }
    let x = this.stack[0];
    this.stack = this.stack.slice(1, this.stack.length);
    return x;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.stack.length) {
        return null;
    }
    return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue();
 * obj.push(x);
 * var param_2 = obj.pop();
 * var param_3 = obj.peek();
 * var param_4 = obj.empty();
 */