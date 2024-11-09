const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"
    try {
        const response = jwt.verify(token, process.env.JWT_SECRET);
        req.user = response; // Store decoded token payload in req.user (if needed)
        next(); // Move to the next middleware
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
    auth
}
