# Challenge: get a random image from Unsplash and set it as the background
Part 1:
- URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
- (You can change the "query" at the end to whatever theme you want)
- Change the body's backgroundImage to: `url(<insert the URL of the iamge from the API here>)`
- (You may need to dig around the response body a bit to find this URL)
- (Note I've already added some CSS to resize the image within the window.
- Instructions for this were found on CSS Tricks:
- https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)

# Challenge 
Part 2: 
- Display the image's author
- With the data you've already fetched, display the name of the image author on the page. They show up as the "user" in the data returned from the API.
- Don't worry about positioning the author in the lower-left yet.

# Challenge: 
- Set up flexbox so the three elements are evenly spread vertically on the screen (don't worry about the horizontal alignment yet)

# Resolved promises quiz

1. What is a promise (in your own words)? 
   - A promise that an operation that normally takes a bit of time
   will eventually finish running. I.O.U. (I owe you)

2. Which part of the code we have so far is a promise?
   - The fetch request returns a promise object.

3. What are the three states a promise can be in?
   - (1) Pending, 
   - (2) Resolved (fulfilled),
   - (3) Rejected

4. What does it mean when a promise is "resolved" (or fulfilled)?
   - The task we wanted to perform finished successfully.

5. How do we tell the code to do something only AFTER a
   promise is resolved?
   - .then() method

6. How do we handle a promise that has been rejected?

# Challenge: get a URL for a default background image and set it here
- Change the query in the URL above back to something real
- Log the image url to the console (replacing console.log(data) above)
- Use that URL as the "default" background image to be used if the promise is ever rejected.

# Challenge: 
- Get current data on a cryptocurrency from the list below
  - bitcoin
  - dogecoin
  - ethereum
  - litecoin

1. Search the API docs for an endpoint that will
   get you the "current data for a coin"
   (https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through
   the data for anything that you may find interesting to use
   in the dashboard

# Challenge: 
- Pull down the cryptocurrency data for dogecoin from the
- CoinGecko API and log it to the console
- Also add a .catch() method to console any errors that might occur to the console

# Challenge: 
- Add the name and icon of the cryptocurrency
- to the upper-left of the dashboard page
- Use `data.name` and `data.image.small` to access that info

# Challenge: 
- Add the following data points underneath the name and icon (1 paragraph each):
1. Current price (data.market_data.current_price.usd)
2. 24-hour high price (data.market_data.high_24h.usd)
3. 24-hour low price (data.market_data.low_24h.usd)
- Feel free to check the response data object for your own currency if you don't want to use USD.

# Challenge: 
- log the current time to the console, formatted like this:
- 1:30 PM
- Use Google and Stack Overflow to find the best way.
- Good luck! 👍

# Challenges:
- Display the current time on the dashboard
- Update the current time every second

# Challenge: 
- Learn how to access the user's coordinates by using the Geolocation Web API!
- Log the user's position to the console.

# Thought Experiment:
- What would getCurrentPosition() look like if it were using promises instead of callbacks? Replace what we have below with your best guess. (It won't function correctly)

# Challenge: 
- Get the user's current weather for their area and log it to the console
- BaseURL: https://apis.scrimba.com/openweathermap/data/2.5/weather
- Queries to include:
  - lat (latitude)
  - lon (longitude)
  - units (imperial or metric)

# Challenge:
- Display the weather icon as an <img /> inside the <div id="weather">
- This site shows an example URL for the icon:
- https://openweathermap.org/weather-conditions
- Note: the weather icon is found instead data.weather, which is an array of weather for that area. You can just access the first item in that array to get the icon ID.

# Challenge: 
- Display the temperature (rounded to the nearest degree) and the city. Don't worry about the layout for now.

# Challenge: 
- Try to lay out the weather similar to how Momentum does it.

