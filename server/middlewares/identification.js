const jwt = require('jsonwebtoken');

exports.identifier = (req, res, next) => {
    let authorizationHeader;
    if(req.headers.client === 'not-browser') {
        authorizationHeader = req.headers.authorization;
    } else {
        authorizationHeader = req.cookies['Authorization'];
    }

    if(!authorizationHeader) {
        return res.status(403).json({
            success: false,
            message:'❌ Unauthorized or Logged out user.'
        });
    }
    try {
        const token = authorizationHeader.split(' ')[1];
        const isValid = jwt.verify(token, process.env.TOKEN_SECRET)

        if(isValid) {
            req.user = isValid;
            next();
        } else {
            throw new Error('❌ Invalid token.')
        }
    } catch (error) {
        console.log(error);
    }
}