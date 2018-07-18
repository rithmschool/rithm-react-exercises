# CheeZJokes App

## Instructions

Build an app that lets people browse cheesy jokes. To generate quotes, you’ll be using this API:

[https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api)

Your jokes application should provide an interface for visitors to view and rate jokes (see the user stories below). No need to go overboard on the design, but the interface should be intuitive and easy to use.

### Part I

#### Core Features (User Stories)

- As a user, when the page loads, I can see a random list of 20 jokes.
- As a user, I can click a button to generate a new list of random jokes.

#### Bonus Features

- As the page is loading, display a loading spinner or message notifying me that the jokes are being loaded. This should hide once the jokes have finished loading.
- Make sure that there are no duplicate jokes.

### Part II

#### Core Features (User Stories)

- As a user, I can upvote a joke if I find it hilarious. I should also see the number of upvotes for that joke.
- As a user, I can downvote a joke if I find it not hilarious. I should also see the number of downvotes for that joke.

#### Bonus Features

- The list of jokes, with votes, should be cached in local storage. I should be able to revisit the page and see the top 5 and bottom 5 jokes.
- As I upvote/downvote jokes, the order of the jokes should change so that the highest rated jokes are at the top.
