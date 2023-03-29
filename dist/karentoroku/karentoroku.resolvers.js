"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCalendarSelect = exports.getUserById = exports.getUsers = exports.createUser = exports.prisma = void 0;
const client_1 = require("../../prisma/client");
const firebase_admin_1 = require("firebase-admin");
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const firebaseAdmin_json_1 = __importDefault(require("../config/firebaseAdmin.json"));
const firebaseApp = (0, app_1.initializeApp)({
    credential: firebase_admin_1.credential.cert({
        privateKey: firebaseAdmin_json_1.default.private_key,
        clientEmail: firebaseAdmin_json_1.default.client_email,
        projectId: firebaseAdmin_json_1.default.project_id,
    }),
});
exports.prisma = new client_1.PrismaClient();
const createUser = (args) => {
    (0, auth_1.getAuth)(firebaseApp)
        .verifyIdToken(args.idToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        // ...
        // console.log(uid);
        return exports.prisma.user.create({
            data: {
                name: args.name,
                username: args.username,
                firebaseUid: uid,
            },
        });
    })
        .catch((error) => {
        // Handle error
        console.log(error);
    });
};
exports.createUser = createUser;
const getUsers = () => {
    return exports.prisma.user.findMany({
        select: {
            name: true,
            username: true,
        },
    });
};
exports.getUsers = getUsers;
const getUserById = (args) => {
    return exports.prisma.user.findUniqueOrThrow({
        select: {
            name: true,
            username: true,
        },
        where: {
            id: args.id,
        },
    });
};
exports.getUserById = getUserById;
// export const createEventType = (args: {
//   name: string;
//   description: string;
//   price: number;
//   timeDuration: number;
//   status: string;
//   username: string;
//   user_Name: string;
//   firebaseId: string;
//   startDate: string;
//   endDate: string;
//   customer_name: string;
//   email: string;
// }) => {
//   return prisma.eventType.create({
//     data: {
//       name: args.name,
//       user: {
//         create: {
//           name: args.user_Name,
//           username: args.username,
//           firebaseUid: args.firebaseId,
//         },
//       },
//       description: args.description,
//       price: args.price,
//       timeDuration: args.timeDuration,
//       status: args.status,
//       customer:{
//         create:{
//           name: args.customer_name,
//           email: args.email,
//         },
//       },
//       calendarSelect: {
//         create: {
//           startDate: args.startDate,
//           endDate: args.endDate,
//         },
//       },
//     },
//   });
// };
const createCalendarSelect = (args) => {
    return exports.prisma.calendarSelect.create({
        data: {
            startDate: args.startDate,
            endDate: args.endDate,
        }
    });
};
exports.createCalendarSelect = createCalendarSelect;
