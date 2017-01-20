var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    res.json({ message: 'API Initialized!' });
});

router.route('/test')
	// retrieve all comments from the database
	.get(function(req, res){
		// look at Comment schema
        res.json({ message: 'Test GET succeeded.' });
	})
	
module.exports = router;