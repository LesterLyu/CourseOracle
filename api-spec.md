# API Specification

## API Routes 
All routes start with ```/api```
### User related
- GET /user/:id  Get user profile
- POST /user/login body {first_name, last_name, email, password}  
- PUT (update) /user body {first_name, last_name, email, password} (Optional)
- POST /user/logout

### University courses related
- GET /universities   
returns a list of universities
- GET /courses?university=University%20of%20Toronto Get all courses belong to one university  
- POST /course body {university, code} 创建course
- POST /university body {university} Or<br>
  https://documenter.getpostman.com/view/35240/SVmyRxAn#72eee1ef-ccbe-49d7-bbe1-0fb756f5c907
  https://github.com/hipo/university-domains-list
  
### Course rating related

- GET /ratings?university=xxx&code=csc108  
get csc108 ratings from xxx university  
return {ratings: [{ratingObject}]}
- POST /rating  
body {university, code, prof, rating[int 0-5], comment, year[int 4digit], term[fall, winter, spring]}
- PUT/DELETE (optional)

### Course material related
- GET  /materials?university=xxx&code=csc369 <br>
  get csc369 materials from xxx university <br>
  return {ratings: [{materialObject]}
  
- POST /material/upload <br>
  body file <br>
  return fileID
- POST /material/submit <br>
  body {university, code, prof, year, semester, material(id), price}
  
- PUT/DELETE (optional)

- POST /material/purchase
  body {buyer, materialId}
  
- POST /material/rating
  body {buyer, materialId, rating}
  
- POST /material/tip
  body {buyer, materialId, tip}

