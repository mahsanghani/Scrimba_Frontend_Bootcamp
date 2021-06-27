# Challenge:
- Use fetch() to load 1, then 5, then 25 colors from the HexBot
- Use FlexBox to create a Responsive 5x5 Grid displaying the colors    

# Challenge:
- Create a variable to store the count of colors to be loaded
- Update the getColors() function to take that count as a parameter
- Set the count to 100 colors, update the .my-color class to maintain the grid structure

# Challenge
- Use fetch() to load data from photos.json
- Display the photos inside of a FlexBox container
  - The src will be https://picsum.photos/id/${photo.id}/100/100
  - The alt text will be the photo.title from the json

- Use Flexbox to display the photos in a Row 
  - The Row should Wrap to a new line on overflow 
  - Give each photo a white 0.1rem solid border
  - Rounded corners at 0.7rem border-radius 
  - Each photo should be at least 1rem away from the photos around it


# Challenge:
- Write a function to create the my-photos Component
  - Create a Column Flexbox container around my-photos
       
- Create a new img and place it, centered, above my-photos
  - This should be hidden initially
  - Also give it the my-photo class
- Create a "click" event for each photo in my-photos
  - When clicked, load the clicked photo into the new img tag

# Challenge:
- Reverse the Column's direction in my-gallery
  - Such that my-photos appear over #my-selected-photo
- Change the size of #my-selected-photo to 300x300
  - And set its default src to be the 3rd item in the Photos array
- Align the photos in my-photos to the right, using Flexbox
  - Align #my-selected-photo to the left, using Flexbox

# Challenge:
- Load users from users.json (originally from https://jsonplaceholder.typicode.com/users)
- Create a simple component that displays the user's username 
  - Alongside a green circle
  - The username and circle should be in individual divs
  - Both should be vertically and horizontally centered
  - The component should only be wide enough to Fit its Content (and some padding)

# Challenge:
- Write a getUserDiv function
- Create a Flexbox container my-online-users
- Display the users vertically
  - Fill all available space

# Challenge:
- Using the body tag as a Flexbox container re-create the provided layout
- Hint: The Header and Footer are each 10% of the container's height

# Challenge:
Create a User Profile using data from
https://jsonplaceholder.typicode.com/users/3
- The User Profile must be a Flexbox container with 4 components 
  1. Profile Header
      - With the User's name and username
  2. Company
      - Displaying information about their company
  3. Contact Details
      - Contains Email/Phone/Website
  4. User Address

# Challenge:
- Copy the JSON user from the API call
  - Store it in the user.json file 
  - Replace the API call with a call to this new file
- Create a profile of your favorite fictional character
  - Style it to fit the character or you own personality!
  
