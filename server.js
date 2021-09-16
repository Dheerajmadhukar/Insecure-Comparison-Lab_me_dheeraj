const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path');
const app = express()

app.use(cookieParser())
app.use(express.static(__dirname + '/public'));

const SESSIONS = {}
const mustBeAuthenticated = (req, res, next) => {
    if(req.cookies) {
        const token = req.cookies.token

        if(token && SESSIONS[token]) {
            //allow it
            next()
        }
    }
    res.cookie('token', 'javascript')
    res.sendFile(path.join(__dirname+'/index.html'));
    //res.send('Not Authorized!')
}

app.get('/', mustBeAuthenticated, (req, res) => {
    
    res.sendFile(path.join(__dirname+'/win.html'));
    //res.send('Happy Hacker!')
})

var port = process.env.PORT || 9000;
app.listen(port);
console.log('Access CTF via URL ' + 'http://0.0.0.0:' + port); //[ twitter.com/Dheerajmadhukar]
