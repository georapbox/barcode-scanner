## Unit Testing
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

---

## Integration Testing
### A. Barcode scan -> Inventory update -> Meal suggestion
### B. Inventory sync with cloud/local storage
### C. Simulate real-world flows: scan multiple items, delete expired, get updated suggestions

---

## UI/UX Testing

### A. Test layout across multiple platforms
        12/4/25 Tested on Windows laptop and IPhone.  Layout rendered properly
### B. Intuativee navigation: scan, view inventory, get meals
        12/4/25 Able to navigate to account, history, settings screens.  Able to switch to use image function.  Home, Items, and Recipes buttons are not functional at this time.  Search function is also non operational.  
### C. Test accessibility like screen readers and color contrast
        12/4/25 Attempted to use screen reader.  Some text was read but not others.  I was not able to test color contrast at this time.
### D. Test error states like no camera, no internet, no matching meals

---

## End-to-End Testing
### Simulate real user scenarios
### Senario example:
### A. Scan 6 items -> enter expirations -> view inventory -> get 3 meal suggestions
### B. Remove expired items -> refresh suggestions
### C. Sync across devices

---

## Performance and Load Testing
### A. Measure scan-to-suggestion latency
### B. Test suggestion engine with large inventories

---

## Security and Privacy Testing
### A. Ensure barcode data and inventory are stored securely
### B. Test for unauthorized access, data leaks, and secure API calls

---

## Acceptance Testing
### A. Conduct user acceptance testing with real users
### B. Gather feedback on usefulness, clarity, and trust in suggestions


### Refinements, additions, and other changes from checkpoint #1. 

  Checkpoint 1:
  -Barcode Scanner working properly
  -Barcode is resolved to a UPC number

  Checkpoint 2:
  -UPC number is sent to ReceipeDB to resolve UPC code to an ingredient
    -limit is 100 requests/day
    -If UPC not found, returns number instead of name
  -Added a timer feature that sets an expiration date for each scanned item. Default timer is 7 days.
  -UI/UX updates / minor landing page updates
  -Persists a list of scanned items.

  

  
