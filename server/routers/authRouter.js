const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const {identifier} = require('../middlewares/identification');

function testMiddleware(req, res, next) {
    return res.send("/signout route");
    next();
}

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', identifier, authController.signout);

module.exports=router;