## Unit Design
### A. Barcode scanner 
  - recognize barcodes
  - reject damaged barcodes
  - mock barcode inputs for automated testing
### B. Grocery inventory management
  - add scanned item to inventory with correct data
  - deletes or updates items
  - receive and store expiration dates
  - test edge cases: duplicate items, missing data, expired items
### C. Expiration date handling
  - correctly calculate days until expiration
  - flag items near expiration
  - test leap years, time zones, and date format variations
### D. Meal suggestions
  - Suggests meals based on ingredients 
  - Prioritize items close to expiration
  - Update suggestions as inventory changes
  - Test with partial ingredients, substitutions, and dietary constraints

### Purpose:
This project is targeted at addressing the growing issue of food waste in America. 
By addressing food waste, users will benefit from improved food utilization and a reduction of waste in the household which will both contribute to improved food spending. 
This app is designed for users who are concerned about the cost and envionmental damage food waste contributes to. 
This app is designed for users of all ages, primarily directed at parents and the head of household.


### Team and responsibilities:

Samuel Kwibe: Back End

Jonathan Corwin: Design and Test

Jon Scott: Back End

Isaac Akhtar Zada: Front End 

Elena Guzman: Website design

### Services used:

[themealdb](https://www.themealdb.com/)

[mongodb](https://www.mongodb.com)

[georapbox/barcode-scanner: A Progressive Web Application (PWA) that scans barcodes of various formats, using the Barcode Detection API.](https://github.com/georapbox/barcode-scanner/tree/main)

[Express.js] server framework

[React.js] front end framework

[Node.js]

[https://api.upcdatabase.org/] upc lookup api
