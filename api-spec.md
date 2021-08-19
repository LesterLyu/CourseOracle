# API Specification

## API Routes 
All routes start with ```/api```
### User related
- GET /user/:address  
- POST /user body {first_name, last_name, email, password}  
- PUT (update) /user body {first_name, last_name, email, password}

### University courses related
- GET /universities   
returns a list of universities
- GET /courses?university=University%20of%20Toronto Get all courses belong to one university  
- POST /course body {university, code}

### Course rating related

- GET /rating?university=xxx&code=csc108  
get csc108 from xxx university  
return {ratings: [{ratingobject}]}
- POST /rating  
body {university, code, prof, rating[int 0-5], comment, year[int 4digit], term[fall, winter, spring]}
- PUT/DELETE (optional)

