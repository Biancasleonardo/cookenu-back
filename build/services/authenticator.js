"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenData = exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var JWT_KEY = process.env.JWT_KEY;
var generateToken = function (payload) { return (0, jsonwebtoken_1.sign)(payload, JWT_KEY, { expiresIn: "1d" }); };
exports.generateToken = generateToken;
var getTokenData = function (token) {
    try {
        var id = (0, jsonwebtoken_1.verify)(token, JWT_KEY).id;
        return { id: id };
    }
    catch (error) {
        return null;
    }
};
exports.getTokenData = getTokenData;
//# sourceMappingURL=authenticator.js.map