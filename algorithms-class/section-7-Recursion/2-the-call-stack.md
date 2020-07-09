### The Call Stack

In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.

ie. the call stack.

- it's a stack data structure
- any time a function is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) from the top

You're used to functions being pushed on the call stack and popped off when they are done

When we write recursive functions, we keep pushing new functions onto the call stack!
