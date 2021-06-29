res : https://www.youtube.com/watch?v=2jqok-WgelI

# Remmebr to open mongodb atlas to begin operation or chenge IP but related to MongoDB_Atlas Only

0. PrePlan
- Know your intension
- file str properly
```sh
/.env
/node_modules
/server.js
/router/auth.js
/model/{ user.js , validation.js }
/README.md
```
- `npm init -y`
1. Server Listening
    - npm i nodemon express
    - init express App
2. Routes Rendering
    - init exp_router
    - get , post
3. Connect to db
    - Have MongoDB Atlas : user > IP > Cluster
    - npm i mongoose dotenv
    - mongoose connect to db
    - env store user&pasw : .env > DB=b3j24h3jh4b5345h4b
4. Test CRUD
    - npm i body-parser : to rec data from usr
    - make rules & fields (Schema,model)
    - CRUD operation
5. Data Validation
    i. chk if data is valid
        - `npm i @hapi/joi`
        - `rules = { attr : joi.rule1().rule() }`
        - `{ err } = joi.validate(req.body,rules)`
    ii. chk if data already exist in DB
    iii. encrpt psw/id for that usr/data
        - `npm i bcrypt`
        - 

