const fs = require('fs');
const path = require('path');

module.exports = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
