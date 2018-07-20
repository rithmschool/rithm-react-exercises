## Part I - Deck of Cards

Build an app that displays a deck of cards, one card at a time. When the page loads, go to the [Deck of Cards API](http://deckofcardsapi.com/) to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck. 

Here's how this might look (with styling added):

![Deck of cards GIF](./cards.gif)

## Part II - CheeZJokes App

Build an app that lets people view and vote on cheesy jokes. To generate quotes, you’ll be using this API:

[https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api)

Your jokes application should provide an interface for visitors to view and rate jokes (see the user stories below). No need to go overboard on the design, but the interface should be intuitive and easy to use.

### Step 1

#### Core Features (User Stories)

- As a user, when the page loads, I can see a random list of 20 jokes.
- As a user, I can click a button to generate a new list of random jokes.

#### Bonus Features

- As the jokes are loading, display a loading spinner or message notifying me that the jokes are being loaded. This should hide once the jokes have finished loading.
- Make sure that there are no duplicate jokes.

### Step 2

#### Core Features (User Stories)

- As a user, I can upvote a joke if I find it hilarious. I should also see the number of upvotes for that joke.
- As a user, I can downvote a joke if I find it not hilarious. I should also see the number of downvotes for that joke.

#### Bonus Features

- The list of jokes, with votes, should be cached in local storage. I should be able to revisit the page and see the top 5 and bottom 5 jokes.
- As I upvote/downvote jokes, the order of the jokes should change so that the highest rated jokes are at the top.

