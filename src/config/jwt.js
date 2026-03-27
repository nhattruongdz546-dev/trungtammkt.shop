'use strict';

const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'your_secret_key';
const expiresIn = '1h';

/**
 * Sign a token
 * @param {Object} payload
 * @returns {string} 
 */
const signToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn });
};

/**
 * Verify a token
 * @param {string} token
 * @returns {Object | string} 
 */
const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};

module.exports = {
    signToken,
    verifyToken
};
