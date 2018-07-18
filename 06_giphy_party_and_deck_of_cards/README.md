## Part I - Giphy Party

Rebuild the [Giphy API exercise](https://www.rithmschool.com/courses/intermediate-javascript-part-2/ajax-exercises) with React. You **do not** need any lifecycle methods to rebuild the exercise. The goal here is to just get some practice making AJAX requests with React.

Once you finished rebuilding this application, include a "gif of the day", which should be a random gif generated, when the page loads. You **will** need to use a component life cycle method for this.

## Part II - Deck of Cards

### Part 1 - Displaying a single Card

1.  Make a request to the [Deck of Cards API](http://deckofcardsapi.com/) to request a single card from a newly shuffled deck. Once you have the card, console log the value and the suit (e.g. "5 of spades", "queen of diamonds").

### Part 2 - Drawing cards from the deck

2.  Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck. Once you have both cards, console log the values and suits of both cards.

3.  Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

    Here's how this might look (with styling added):

    ![Deck of cards GIF](./cards.gif)
