**Project Overview:**

The project aims to address the significant issue of food waste in the U.S., where the average American discards approximately $2000 worth of edible food annually, contributing to an estimated $408 billion in grocery waste nationwide. The solution is an app designed to help users manage their food inventory by tracking items brought into their homes and suggesting recipes based on available ingredients, those nearing expiration, and user preferences.

**Key Components:**
1. Barcode Repository Integration: A free barcode repository has been connected to a system that tracks scanned items, recording details such as the item and purchase time.
3. Recipe API Connection: The app is linked to TheMealDB, a free meal API that searches for meals based on available ingredients, offering recipe suggestions to users.

**Current Tasks:**
- Implement a list to track scanned ingredients.
- Add expiration timers to each ingredient, potentially using national average data.
- Store the ingredient list in a database.
- Develop logic for suggesting recipes based on the user’s available ingredients.

**List of which project parts will be worked on by which team member(s):**

**Samuel Kwibe:** I will be working closely with Jon on the backend of the project, will be responsible for fixing the API and ensuring the project runs smoothly.  Working on list to maintain scanned items into a database.  Currently when the scanner is exited the data is removed.

**Jon Scott:** Back End. Completed linking the API from https://api.upcdatabase.org/. This API will resolve a 12-14 digit UPC to a product that can be added to our list.  Working on linking the API from https://spoonacular.com/food-api/console#Profile.

**Jonathan Corwin:** Design and Test - Working on presentation design.  Also, Working on creating test cases and implimentation of testing.

**Isaac Akhtar Zada:** Front End (I will be working on the front end to create a time counter for our app, which will track the time from when the food is purchased until it expires. Additionally, I will attempt to develop the app for iOS as well as Android.)

**Elena Guzman:** Website design - I'm going to be working on the landing page for the web page

How to start:
cd into server and run the following 2 commands:
$env:UPC_API_KEY = "4190D3F1E6057DD921DA7E426A79AAF3"
npm run start:proxy
cd into the main folder where everything is:
run npm start
