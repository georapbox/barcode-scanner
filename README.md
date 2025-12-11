**Project Overview:**

The project aims to address the significant issue of food waste in the U.S., where the average American discards approximately $2000 worth of edible food annually, contributing to an estimated $408 billion in grocery waste nationwide. The solution is an app designed to help users manage their food inventory by tracking items brought into their homes and suggesting recipes based on available ingredients, those nearing expiration, and user preferences.

**Key Components:**
1. Barcode Repository Integration: A free barcode repository has been connected to a system that tracks scanned items, recording details such as the item and purchase time.
3. Recipe API Connection: The app is linked to TheMealDB, a free meal API that searches for meals based on available ingredients, offering recipe suggestions to users.

**List of which project parts will be worked on by which team member(s):**

**Samuel Kwibe:** I worked closely with Jon on the backend of the project, was responsible for fixing the API and ensuring the project runs smoothly.  I worked on a list to maintain scanned items into a database.  

**Jon Scott:** Back End. Completed linking the API from https://api.upcdatabase.org/. This API will resolve a 12-14 digit UPC to a product that can be added to our list.  Working on linking the API from https://spoonacular.com/food-api/console#Profile.

**Jonathan Corwin:** Design and Test - Worked on presentation design.  Also, Worked on creating test cases and implimentation of testing.

**Isaac Akhtar Zada:** Front End (Worked on the front end to create a time counter for our app, which will track the time from when the food is purchased until it expires.)

**Elena Guzman:** Website design - Worked on the landing page for the web page

**How to start:**

You need to start two API's and one react component

API 1: 
cd into server and run the following 2 commands:

$env:UPC_API_KEY = "4190D3F1E6057DD921DA7E426A79AAF3"

npm run start:proxy

API 2:

cd in a new terminal into server and run the following 2 commands:

$env:UPC_API_KEY2 = "fca61d79d6054c04943fdfbf80b32256"

node server/RecipeDB.js

React Component

cd into the main folder where everything is:

run: npm install

run npm start

**I just added the image feature the user can scan and view the history and see the image URL

