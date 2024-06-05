const { validateUserToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        if (!tokenCookieValue) {
            return next();
        }

        try {
            const userPayload = validateUserToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {}
        return next();
    }
}

module.exports = {
    checkForAuthenticationCookie,
}