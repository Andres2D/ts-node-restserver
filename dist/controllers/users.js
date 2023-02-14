"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUser = exports.puttUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
var getUsers = function (req, res) {
    try {
        res.json({
            ok: true,
            msg: 'getUsers'
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};
exports.getUsers = getUsers;
var getUser = function (req, res) {
    try {
        var id = req.params.id;
        res.json({
            ok: true,
            msg: 'getUser',
            id: id
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};
exports.getUser = getUser;
var postUser = function (req, res) {
    try {
        var body = req.body;
        res.json({
            ok: true,
            msg: 'postUser',
            body: body
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};
exports.postUser = postUser;
var puttUser = function (req, res) {
    try {
        var body = req.body;
        var id = req.params.id;
        res.json({
            ok: true,
            msg: 'putUser',
            body: body,
            id: id
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};
exports.puttUser = puttUser;
var deletetUser = function (req, res) {
    try {
        var id = req.params.id;
        res.json({
            ok: true,
            msg: 'deleteUser',
            id: id
        });
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error'
        });
    }
};
exports.deletetUser = deletetUser;
//# sourceMappingURL=users.js.map