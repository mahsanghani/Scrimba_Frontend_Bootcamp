# Challenge:
Background:
- The Deck of Cards API expects us to provide the deck id of the deck we're playing with so it can remember which cards we've already drawn, how many are remaining in the deck, etc.
- Task: save the deck_id from the returned data to a local variable so we can use it later

# Challenge:
Task: 
- Using the saved deckId, draw 2 new cards from the deck
- Docs for original Deck of Cards API: https://deckofcardsapi.com/#draw-card
- BaseUrl you'll use: https://apis.scrimba.com/deckofcards/api/deck/
- (that will replace the base url of https://deckofcardsapi.com/api/deck/) 
- that you'll see in the deck of cards API docs.

1. Create a new button that, when clicked, draws 2 cards from the deckId you have saved
- Note: you'll need to get a new deck every time you refresh the page, since you're only saving your deckId in a local variable right now
2. Log those 2 cards to the console

# Challenge:
- Display the images of the 2 cards you drew in the browser.
- Probably best to use `innerHTML` to insert a couple <img> elements on the page.

# Challenge:
Start making this look lots nicer :)
1. Add a card table background with the img/table.png image provided.
2. Move the draw button to the very bottom of the page, full width
3. Add some button styles. You can use the photo on the slides for one option.

# Challenge:
- Create a spot in the HTML for the cards to be placed in.
- Typical playing cards have a 5:7 ratio (width-to-height).

# Challenge:
- Place each of the cards we draw into its respective card-slot
- Hint: consider using element.children in the DOM instead of giving each card-slot its own unique ID
https://developer.mozilla.org/en-US/docs/Web/API/Element/children

# Challenge:
- Try to determine which of the 2 cards is the "winner" (has higher value)
- Aces are the card with the highest "score"
- In parts:
- Create a function that takes 2 card objects as parameters, `card1` and `card2`. These card objects have a property called `value`, which can be any one of the following strings, in order of rising "score":
"2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"
- I.e. "2" is the lowest score and "ACE" is the highest.
- The function should determine which of the 2 cards (`card1` or `card2`) has the higher score, or if they have the same score.
- Log which card wins (or "It's a tie!" if they're the same) to the console

# Challenge:
- Part 1:
  - Try to determine which of the 2 cards is the "winner" (has higher value)
  - Aces are the card with the highest "score"
- Part 2:
  - Instead of logging the winner to the console, display an `h2` on the screen above the 2 cards that declares who the winner is.
  - If card1 is the higher card, display "Computer wins!"
  - If card2 is the higher card, display "You win!"
  - If they're equal, display "War!"

# Challenge:
- Display the number of cards remaining in the deck on the page
- Hint: Check the data that comes back when we draw 2 new cards to see if there's anything helpful there for this task (😉)

# Challenge:
- Display the number of remaining cards when we request a new deck, not just when we draw the 2 cards.
- Hint: check the data coming back from when we get a new deck.

# Challenge:
- Disable the Draw button when we have no more cards to draw from in the deck.
- Disable both the functionality of the button (i.e. change `disabled` to true on the button) AND the styling (i.e. add a `disabled` CSS class to make it look unclickable)

# Challenge:
- Keep score! Every time the computer wins a hand, add a point to the computer's score. Do the same for every time you win a hand.
- If it's a war, no points are awarded to either player. If it's a war (same card values), no one is awarded points.
- Display the computer's score above the top card, display your own score BELOW the bottom card.
- Track the scores in a global variable defined at the top of this file
- Add to the global scores inside the `determinCardWinner` function below.

# Challenge:
- Display the final winner in the header at the top by replacing the text of the h2.

