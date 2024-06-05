const JWT = require("jsonwebtoken");

const secret = "aditya@1824";

function createTokenForUser(user){
    const payload = {
        _id : user._id,
        email : user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateUserToken(token){
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateUserToken,
}