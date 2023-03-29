import { PrismaClient } from "../../prisma/client";
import { ICreateUser } from "./karentoroku.interfaces";
import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "../config/firebaseAdmin.json";
import { date } from "fp-ts";

const firebaseApp = initializeApp({
  credential: credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
});

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  getAuth(firebaseApp)
    .verifyIdToken(args.idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      // ...
      // console.log(uid);
      return prisma.user.create({
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

export const getUsers = () => {
  return prisma.user.findMany({
    select: {
      name: true,
      username: true,
    },
  });
};

export const getUserById = (args: { id: number }) => {
  return prisma.user.findUniqueOrThrow({
    select: {
      name: true,
      username: true,
    },
    where: {
      id: args.id,
    },
  });
};

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

export const createCalendarSelect = (args: { startDate: string, endDate: string}) => {
  return prisma.calendarSelect.create({
    data:{
      startDate: args.startDate,
      endDate: args.endDate,
    }
  })
}