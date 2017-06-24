const express = require('express');
const path  = require('path');
const app = express();
const router = require('./app/router');

/*below line has been used just to avoid error, we dont use ejs but to use render method this is needed
* see- https://stackoverflow.com/questions/17560760/why-is-express-telling-me-that-my-default-view-engine-is-not-defined
* */
app.engine('.html', require('ejs').renderFile);

app.use('/',router.router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
    console.log('Listening on 3000');
});



