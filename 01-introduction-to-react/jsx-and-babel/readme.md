## JSX Exercises

### Part 1

Refactor your solutions from the introduction to use JSX. Your solutions should not use any syntax like `React.DOM.h1`, and you should use `babel` to transpile your code.

### Part 2

Create a component called `Person`. Inside of this component, render a `p` tag which displays "Learn some information about this person". Each person should have name and age properties. 

If the person is over 21 years old, display an additional `h3` that says "have a drink!". Otherwise, display an `h3` that says "you must be 21". If the person's name is longer than 8 characters, only display the first six characters of their name.

Add a prop called hobbies to your `Person` component that accepts an array of hobbies (an array of strings).  Your Person component should list each one of these hobbies as an `li`. 

Finally, render at least three copies of the `Person` component on the page.
