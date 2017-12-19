## JSX Exercises

### Part 1

For this assignment you will be creating three components:

1. `FirstComponent`, which is an `h1` with the text "My very first component."
2. `SecondComponent`, which is an `h2` with the text "My second component."
3. `NamedComponent`, which is a `p` that should accept a property of "name" and display the text "My name is " + name.

### Part 2

1. Define a `Tweet` component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.
2. Create an `App` component that renders at least three tweets.
3. Style your `Tweet` component!

### Part 3

Create a component called `Person`. Inside of this component, render a `p` tag which displays "Learn some information about this person". Each person should have name and age properties. 

If the person is over 21 years old, display an additional `h3` that says "have a drink!". Otherwise, display an `h3` that says "you must be 21". If the person's name is longer than 8 characters, only display the first six characters of their name.

Add a prop called hobbies to your `Person` component that accepts an array of hobbies (an array of strings).  Your Person component should list each one of these hobbies as an `li`. 

Finally, render at least three copies of the `Person` component on the page.
