# TODO

- [ ] connect F to B
- [x] F: login
- [ ] F: profile
- [ ] R&D : site's to deploy F+B app
- [ ] future : usr del profile , update psw


> Remmebr to open mongodb atlas to begin operation or chenge IP but related to MongoDB_Atlas Only

# Frontend
https://ionify.com/
```yaml
!Asset
col: [pr: 1abc9c, bg: ecf0f1]
fnt: Croissant One

!wire
col-1:
    - h1 > p10 > btn
col-2:
    - h2 > p4 > inp*3 > btn

```

# Backend 

0. PrePlan
- `npm init -y`
- Know your intension
- file str properly
```sh
/.env
/node_modules
/server.js
/middleware/jwt.js
/router/{ auth.js , profile.js }
/model/{ user.js , validation.js }
/views/{index.pug , /partial/(navbar.pug , footer.pug...) }
/public
    /css/{style.css,lib.css}
    /js/form.js
    /img/
/README.md
```
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
    1. chk if data is valid
        - Validate
        - `npm i @hapi`
            - `rules = { attr : joi.rule1().rule() }`
            - `{ err } = joi.validate(req.body,rules)`
        - encrpt/decrypt : `npm i joi bcrypt`
            = encrypt( NormalPasw , encoder )
            = compare( userPsw , encodedPsw ) => T:usr_is_valid | F:usr_is_Invalid
    2. chk if data already exist in DB
        - N : encrpt psw/id for that usr/data then register
        - Y : decode and compare with usr.psw then loggin
6. JWT Token
    - context
        - once logged in : A special token will be given to Client so next it automatically get loggedin
        - Client  <-> server : 1>register 2>login(JWT_given) 3>AutoLogin(with_JWT)...
    - psuedo code
        - install jwt : npm i jsonwebtoken
        - token encoding : token( id , psw.env )
        - token header appending
        - token verify middleware
            = 1. chk token avalable > verify > dcrpt usrID > req.usr
            = chk token availale & verify
            = then decrpt to usrID => req.user
    

