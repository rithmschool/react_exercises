## Events Exercises

## Part 1

Create two components `CustomLink` and `App`. The `CustomLink` component should accept three props:

- `href` - a URL
- `text` - the text inside the link
- `handleClick` - a callback to run when the user clicks on the link.

The component should render a link tag with an appropriate `href` and `text` coming from the props. It should also open in a new window (set the `target` attribute to `"_blank"`).

The `App` component should show at least three `CustomLink` components, along with a button that, when clicked, disables all of the links. In other words, if you click on the button and then click on the link, nothing should happen. Clicking on the button again should re-enable the links.

## Part 2

Create three components, `TodoList`, `Todo`, and `App`. The `TodoList` component should contain an array called `todos`. The `TodoList` component should be responsible for listing all of the todos. Each `Todo` component should consist of a title and a description, along with buttons to mark a todo as complete and completely remove a todo from the list.

Much of this application should be similar to the `Instructor` application from the notes, but try to build this application from scratch as much as possible. As a bonus, add some styling!