"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByFirebaseIdToken = exports.getUser = exports.getUsers = exports.createUser = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
const firebase_admin_1 = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firebaseAdmin_json_1 = __importDefault(require("../config/firebaseAdmin.json"));
// https://medium.com/signofactory/building-your-first-saas-using-next-js-firebase-auth-express-js-and-postgresql-97a0285ce30a
const firebaseApp = (0, app_1.initializeApp)({
    credential: firebase_admin_1.credential.cert({
        privateKey: firebaseAdmin_json_1.default.private_key,
        clientEmail: firebaseAdmin_json_1.default.client_email,
        projectId: firebaseAdmin_json_1.default.project_id,
    }),
    // databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});
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
const getUserByFirebaseIdToken = (args) => {
    (0, auth_1.getAuth)(firebaseApp)
        .verifyIdToken(args.idToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        // ...
        // console.log(uid);
        return exports.prisma.user.findUniqueOrThrow({
            select: {
                username: true,
            },
            where: {
                firebaseUid: uid,
            },
        });
    })
        .catch((error) => {
        // Handle error
        console.log(error);
    });
};
exports.getUserByFirebaseIdToken = getUserByFirebaseIdToken;
