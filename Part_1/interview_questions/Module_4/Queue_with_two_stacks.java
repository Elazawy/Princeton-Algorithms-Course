class MyQueue {
    Stack<Integer> first_stack = new Stack<Integer>();
    Stack<Integer> second_stack = new Stack<Integer>();

    public MyQueue() {


    }

    public void push(int x) {
        first_stack.push(x);
    }

    public int pop() {
        if (second_stack.isEmpty()) {
            while (!first_stack.isEmpty()) {
                second_stack.push(first_stack.pop());
            }
        }
        return second_stack.pop();
    }

    public int peek() {
        if (second_stack.isEmpty()) {
            while (!first_stack.isEmpty()) {
                second_stack.push(first_stack.pop());
            }
        }
        return second_stack.peek();
    }

    public boolean empty() {
        return (first_stack.isEmpty() && second_stack.isEmpty());
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */