"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = __importDefault(require("./models/server"));
// COnf dotenv
dotenv_1.default.config();
exports.server = new server_1.default();
exports.server.listen();
//# sourceMappingURL=app.js.map