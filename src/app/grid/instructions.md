# Jeopardy:
- Write an async function that uses fetch() to fetch 4 categories from https://jservice.io/api/categoriesparameters: count, offset
- Display the categories in a simplified 4x5 Jeopardy Board using CSS Grid

# Jeopardy:
- Update getCategories to take count/offset arguments
- Fetch 5 Categories (Update the display as necessary)
- Write a getClueHtml() function calculate grid-row-start based on the input value which will always be a multiple of 100

# Pokedex:
- Write an async function that uses fetch() to fetch all Pokemon from pokemon.json
- Display all the Pokemon ID, English Name, Type(s), Stats: HP/Attack/Defense/Speed

# Pokedex:
- Write and utilize a displayPokedex(allPokemon) function 
- Display the Japanese, Chinese, and French name of each Pokemon under its Stats each should take up 1/3rd of the row

# Library:
- Fetch the collection of books from books.json, assign each a unique id
- Create a div to represent a book using Grid & grid-template-areas build a book component display all books using Flexbox

# Library:
- Write a displayLibrary(books) function
  - Add error catching
- Use CSS Grid instead of Flexbox to style the library container
  - Use a gap of 1rem
  - Display 3 books per row

# TV Guide:
- Write an async function called findShow(query) performs a fetch call to: https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons and returns the resulting show object
- Build a layout to display the show
  - Title
  - Summary
  - Seasons listed as individual divs

# TV Guide:
- The API call is now searching ALL shows instead of "singlesearch"
- Write and implement a getShowHtml(show) function as well as displayShows(shows) to display all of the results inside of a container with a class of my-shows

# API 4 API's
- Fetch the list of 642 open APIs from https://api.publicapis.org/entries
- Create a my-api component display the name and category of the API, the description, and also display the type of Auth (if any) and whether or not the API supports HTTPS
- Use CSS Grid to style my-api
  - The title and category should be listed as Title (Category) and should link to the API docs
- The grid should have 4 rows 3rem, 1rem, 4rem, 3rem respectively and 3 columns each 1/3rd of available width
- Finally, display all of the APIs

