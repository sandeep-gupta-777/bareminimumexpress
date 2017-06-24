const router = require('express').Router();

router.get('/', function (req,res) {
    res.send('hello world');
});
router.get('/test', function (req,res) {
    res.render('test.html');
});


module.exports = {
    router
};
