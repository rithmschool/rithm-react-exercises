# Dog Finder Solution

## How It Works

App has two routes:

`/dogs`
`/dogs/:name`

Both of them render the `Dogs` component.

`Dogs` maps over the dog info, and renders a `Dog` component for each dog.

`Dogs` passes the route parameter, `name`, down as `currentDog` if there is one.

The `Dog` component renders extra info if there it `this.props.currentDog` exists.
