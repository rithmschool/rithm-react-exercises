## Events and Forms in React

### Part 1 - CustomLink

Create two components `CustomLink` and `App`. The `CustomLink` component should accept three props:

- `href` - a URL
- `text` - the text inside the link
- `handleClick` - a callback to run when the user clicks on the link, which logs the message "you clicked on a link!".

The component should render a link tag with an appropriate `href` and `text` coming from the props. It should also open in a new window (set the `target` attribute to `"_blank"`).

The `App` component should show at least three `CustomLink` components, along with a button that, when clicked, disables all of the links. In other words, if you click on the button and then click on the link, nothing should happen. Clicking on the button again should re-enable the links.

### Part 2 - Div Maker

Create an app with a form that lets you add `divs` to the page.

Inside of the form you should be able to specify the `div`'s width, height, and background color.

When you submit the form, the div should show up on the page with the specified style.

### Part 3 - Add a New Todo

Revisit your todo app from the events chapter. Create another component called `NewTodoForm` which should render a form that, when submitted, will create a new `Todo`.

With your todo app, add a component called `EditableTodo` which is displayed instead of a `Todo` when a todo is being edited.

### Part 4 - Edit a Todo
