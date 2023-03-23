"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = exports.createUser = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
exports.prisma = new client_1.PrismaClient();
const createUser = (args) => {
    return exports.prisma.user.create({
        data: {
            name: args.name,
        },
    });
};
exports.createUser = createUser;
const getUsers = () => {
    return exports.prisma.user.findMany({
        select: {
            name: true,
        },
    });
};
exports.getUsers = getUsers;
const getUser = (args) => {
    return exports.prisma.user.findUniqueOrThrow({
        select: {
            name: true,
        },
        where: {
            id: args.id,
        },
    });
};
exports.getUser = getUser;
