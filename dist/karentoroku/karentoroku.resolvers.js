"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
exports.prisma = new client_1.PrismaClient();
const createUser = (args) => {
    return exports.prisma.user.create({
        data: {
            username: args.username,
        },
    });
};
exports.createUser = createUser;
const getUsers = () => {
    return exports.prisma.user.findMany({
        select: {
            username: true,
        },
    });
};
exports.getUsers = getUsers;
const getUser = (args) => {
    return exports.prisma.user.findUniqueOrThrow({
        select: {
            username: true,
        },
        where: {
            id: args.id,
        },
    });
};
exports.getUser = getUser;
