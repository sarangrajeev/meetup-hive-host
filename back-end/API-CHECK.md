## API testing
---

Check api and document here.

#### glug

- [x] /list             
- [x] /get/{glug_id}    
- [x] /create           
- [x] /put/{glug_id}    
- [x] /delete/{glug_id} 

#### institutions

- [x] GET /list
- [x] GET /get/{institution_id}
- [x] POST /create (Ensure that the glug ID exists in db.)
- [x] PUT /edit/{institution_id} (All fields must be included in the payload.)
- [x] DELETE /delete/{institution_id}

##### staff

- [x] GET /staff/list
- [x] GET /staff/get/{staff_id}
- [x] POST /staff/create
- [x] PUT /staff/edit/{staff_id}
- [x] DELETE /staff/delete/{staff_id}