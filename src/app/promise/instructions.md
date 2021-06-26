# Promises

- 3 states
  - Pending: the default, beginning state for any promise. Means the promise has yet to be completed
  - Fulfilled: completed as promised.
  - Rejected: does NOT mean the result wasn't what you wanted, but that the promise wasn't completed at all

# Challenge: method chaining!
- Select the button in the DOM and add an event listener to it without saving the DOM element as a separate variable. I.e. "chain" the `addEventListener` on after your `getElementById()`(When clicked, log "Clicked" to the console)
   - I realize this might feel like busywork, but my intent will make sense soon
- Given the array below, chain the `.filter` and `.map` array methods together to turn the array into an array of string email addresses of only the people in the array who voted. Log the array of email addresses to the console

# Mini challenge: 
- Figure out what `promise.then()` returns!
- Save the result to a variable and log it to the console.

# Time to be curious!
- What would happen if you didn't return `res.json()` from the first .then block?
- What would the next .then() callback receive as its parameter if you returned something totally different??

# Challenge:
- pass the string "World" down to a 3rd .then() block and log it to the console inside the body of this new 3rd .then() block

