"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var router = (0, express_1.Router)();
router.get('/', users_1.getUsers);
router.get('/:id', users_1.getUser);
router.post('/', users_1.postUser);
router.put('/:id', users_1.puttUser);
router.delete('/:id', users_1.deletetUser);
exports.default = router;
//# sourceMappingURL=users.js.map