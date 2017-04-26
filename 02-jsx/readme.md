## JSX Exercise

### Part 1

Create the following three components again:


1. `FirstComponent`, which is an `h1` with the text "My very first component."
2. `SecondComponent`, which is an `h2` with the text "My second component."
3. `NamedComponent`, which is a `p` that should accept a property of "name" and display the text "My name is " + name. 

But refactor your code to use JSX. Your three components should not use any syntax like `React.DOM.h1` and should use babel to transpile.

### Part 2

Create a component called `Person`. Inside of this component, render a `p` tag which displays "Learn some information about this person". Each person should have name and age properties. 

If the person is over 21 years old, display an additional `h3` that says "have a drink!". Otherwise, display an `h3` that says "you must be 21". If the person's name is longer than 8 characters, only display the first six characters of their name.

Inside of your Person component, create a variable called hobbies which is an array of hobbies. Your Person component should list each one of these hobbies as an `li`. 
