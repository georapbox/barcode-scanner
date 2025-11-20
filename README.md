Project Overview:

The project aims to address the significant issue of food waste in the U.S., where the average American discards approximately $2000 worth of edible food annually, contributing to an estimated $408 billion in grocery waste nationwide. The solution is an app designed to help users manage their food inventory by tracking items brought into their homes and suggesting recipes based on available ingredients, those nearing expiration, and user preferences.

Key Components:
1. Barcode Repository Integration: A free barcode repository has been connected to a system that tracks scanned items, recording details such as the item and purchase time.
2. Database Storage: The item list is stored in a MySQL database for its structured format and performance advantages over MongoDB.
3. Recipe API Connection: The app is linked to TheMealDB, a free meal API that searches for meals based on available ingredients, offering recipe suggestions to users.

Current Tasks:
- Implement a list to track scanned ingredients.
- Add expiration timers to each ingredient, potentially using national average data.
- Store the ingredient list in a database.
- Ensure seamless connection between TheMealDB and the app.
- Develop logic for suggesting recipes based on the user’s available ingredients.

List of which project parts will be (at least initially) worked on by which team member(s).

Samuel Kwibe: Back End

Jonathan Corwin: Design and Test

Jon Scott: Back End

Isaac Akhtar Zada: Front End

Elena Guzman: Website design
