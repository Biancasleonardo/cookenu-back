"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../connection"));
var types_1 = require("../types");
connection_1.default.raw("\n    CREATE TABLE IF NOT EXISTS " + types_1.userTableName + " (\n        id VARCHAR(255) PRIMARY KEY,\n        name VARCHAR(255) NOT NULL,\n        email VARCHAR(255) NOT NULL UNIQUE,\n        password VARCHAR(255) NOT NULL\n    );\n\n    CREATE TABLE IF NOT EXISTS " + types_1.recipeTableName + " (\n        id VARCHAR(255) PRIMARY KEY,\n        title VARCHAR(255) NOT NULL,\n        description VARCHAR(15000) NOT NULL,\n        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n        author_id VARCHAR(255),\n\n        FOREIGN KEY (author_id) REFERENCES " + types_1.userTableName + " (id)\n    );\n    ").then(function () {
    console.log('Mysql tables were successfully created');
}).catch(function (error) {
    console.log(error.message);
}).finally(function () {
    connection_1.default.destroy();
});
//# sourceMappingURL=index.js.map