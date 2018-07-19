## Events and Forms in React

### Part 1 - Review of Events ---> CustomLink

Create two components `CustomLink` and `App`. The `CustomLink` component should accept two props:

- `href` - a URL
- `text` - some text inside the link

The `CustomLink` component should render a link tag with an appropriate `href` and `text` coming from the props.

Inside the `CustomLink` component, make sure that you set the `target` attribute to `"_blank"` so that when the `CustomLink` component is clicked, a new tab is opened with that `href`.

The `App` component should render the `CustomLink` component(s), along with a button that when clicked, runs a function called `toggleDisablingLinks`, which disables all of the links. In other words, if you click on the button and then click on any of the links, nothing should happen. Clicking on the button again should re-enable the links.

### Part 2 - Color Box Maker

Create a new React application, which contains the following components:

- `App` - this component should render the `BoxList` and `NewBoxForm` components. Place your state that contains all of the boxes here.
- `BoxList` - this component should render all of the `Box` components.
- `Box`- this component should display a `div` with a background color, width and height based on the props passed to it.
- `NewBoxForm` - this component should render a form that allows you to when submitted, create a new `Box`. You should be able to specify the `Box`'s width, height, and background color. When the form is submitted, clear the input values.

**BONUS** - When each `Box` component is displayed, add a button with the text of of "X" next to each button. When this button is clicked, remove that specific box. This will require you to pass a function down as props and figure out how to make sure you're deleting the correct todo. You can read more on how to do that [here](https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers)

### Part 3 - Todo App - List, Add, Remove Todos

Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.

- `App` - this component should render the `NewTodoForm` and `TodoList` components. Place your state that contains all of the todos here.
- `TodoList` - this component should render all of the `Todo` components.
- `Todo`- this component should display a `div` with the task of the todo.
- `NewTodoForm` - this component should render a form with one text input for the task to be created. When this form is submitted, a new `Todo` component should be created.

### Part 4 - Todo App - Editing and Bonuses

It's time to edit some todos!

- `TodoList` - this component should render all of the `Todo` and/or `EditableTodo` components.
- Each `Todo` component should also display a button with the text "edit" that when clicked, displays the task as an `EditableTodo` component. There should also be a button with the text "X" that when clicked, removes the todo.
- `EditableTodo`- this component should display a `form` with the task of the todo as an input and a button to submit the form. When the form is submitted, the task of the text should be updated and the form should be hidden (display the task using a `Todo` component instead of `EditableTodo`).

**BONUS 1** - When each `Todo` component is displayed, add a button with the text of "Mark as completed". When this button is clicked, add a strike through the text of the todo.

**BONUS 2** - Instead of a button that when clicked adds a strike through, refactor your application so that when that button is clicked, if the todo is completed (something each todo will have in state), add a strike through, otherwise if a todo is not completed, remove the strike through.

**BONUS 3** - Add some styling to your application! Try to use a CSS animation that fades out a `Todo` when it is deleted (this will involve adding/removing CSS classes).
