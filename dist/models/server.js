"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("../routes/users"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //middlewares
        this.middlewares();
        //Define the routes
        this.routes();
    }
    Server.prototype.middlewares = function () {
        // CORS 
        this.app.use((0, cors_1.default)());
        // Parse body
        this.app.use(express_1.default.json());
        // public folder
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.users, users_1.default);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port " + _this.port + " \uD83D\uDE80");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map