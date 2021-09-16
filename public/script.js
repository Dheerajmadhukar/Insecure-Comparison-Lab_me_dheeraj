$(document).ready(function() {
		$(".help").click(function() {
			$(this).clone("help").appendTo("#help");
		});
}); 

// $(document).ready(function() {
// 	const textArray = textString.split('');
// 	const textElem = $('.hacking-animation__text');

// 	let count = 0;

// 	setInterval(() => {
// 			if(textArray[count] === "\n") {
// 					textElem.append("<br>");
// 			}
// 			else {
// 					textElem.append(`<span class="hacking-animation__character">${textArray[count]}</span>`);
// 			}

// 			count++;
// 			if (count === textArray.length) {
// 					count = 0;
// 			}
// 	}, 20);
// });

// var textString = `const express = require('express')
// const cookieParser = require('cookie-parser')
// const path = require('path');
// const app = express()

// app.use(cookieParser())
// app.use(express.static(__dirname + '/public'));

// const SESSIONS = {}
// const mustBeAuthenticated = (req, res, next) => {
//     if(req.cookies) {
//         const token = req.cookies.token

//         if(token && SESSIONS[token]) {
//             //allow it
//             next()
//         }
//     }
//     res.sendFile(path.join(__dirname+'/index.html'));
//     //res.send('Not Authorized!')
// }

// app.get('/', mustBeAuthenticated, (req, res) => {
    
//     res.sendFile(path.join(__dirname+'/win.html'));
//     //res.send('Happy Hacker!')
// })

// var port = process.env.PORT || 9000;
// app.listen(port);
// console.log('Access CTF via URL ' + 'http://0.0.0.0:' + port); //[ twitter.com/Dheerajmadhukar]`
