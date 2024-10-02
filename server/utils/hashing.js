const {hash, compare} = require('bcrypt');

exports.doHash = async function(value, saltValue) {
    const result = await hash(value, saltValue);
    return result;
}
exports.doHashValidation = async function(value, hashedValue) {
    const result = await compare(value, hashedValue);
    return result;
}