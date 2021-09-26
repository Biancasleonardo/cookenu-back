"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.generateHash = void 0;
var bcryptjs_1 = require("bcryptjs");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var generateHash = function (plainText) {
    var rounds = Number(process.env.BCRYPT_COST);
    var salt = (0, bcryptjs_1.genSaltSync)(rounds);
    return (0, bcryptjs_1.hashSync)(plainText, salt);
};
exports.generateHash = generateHash;
var compareHash = function (plainText, cypherText) { return (0, bcryptjs_1.compareSync)(plainText, cypherText); };
exports.compareHash = compareHash;
//# sourceMappingURL=hashManager.js.map