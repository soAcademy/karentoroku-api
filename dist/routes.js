"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const karentoroku_handlers_1 = require("./karentoroku/karentoroku.handlers");
exports.AppRoutes = [
    {
        path: "/createUser",
        method: "post",
        action: karentoroku_handlers_1.createUserHandler,
    },
    {
        path: "/getUsers",
        method: "post",
        action: karentoroku_handlers_1.getUsersHandler,
    },
    {
        path: "/getUser",
        method: "post",
        action: karentoroku_handlers_1.getUserHandler,
    },
];