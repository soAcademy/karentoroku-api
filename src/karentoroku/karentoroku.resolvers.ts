import { PrismaClient } from "../../prisma/client";
import { ICreateEventType, ICreateUser } from "./karentoroku.interfaces";
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
      console.log("Error:", error);
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

export const createEventType = (args: ICreateEventType) => {
//   {
//   name: string;
//   description: string;
//   price: number;
//   timeDuration: number;
//   userId: number;
//   date: string;
//   startTime: string;
//   endTime: string;
// }) 

  return prisma.eventType.create({
    data:{
      name: args.name,
      description: args.description,
      price: args.price,
      timeDuration: args.timeDuration,
      user:{
        connect:{
          id: args.userId
        }
      },
      weekday:{
        create:{
          date: new Date(args.date),
          timeSelect:{
            create:{
              startTime: new Date(args.startTime),
              endTime: new Date(args.endTime)
            }
          }
        }
      }
    }
  });
};


