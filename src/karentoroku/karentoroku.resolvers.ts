import { PrismaClient } from "../../prisma/client";
import { ICreateUser } from "./karentoroku.interfaces";
import { credential } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "../config/firebaseAdmin.json";

// https://medium.com/signofactory/building-your-first-saas-using-next-js-firebase-auth-express-js-and-postgresql-97a0285ce30a
const firebaseApp = initializeApp({
  credential: credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
  // databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: {
      username: args.username,
    },
  });
};

export const getUsers = () => {
  return prisma.user.findMany({
    select: {
      username: true,
    },
  });
};

export const getUser = (args: { id: number }) => {
  return prisma.user.findUniqueOrThrow({
    select: {
      username: true,
    },
    where: {
      id: args.id,
    },
  });
};

export const getUserByFirebaseIdToken = (args: { idToken: string }) => {
  getAuth(firebaseApp)
    .verifyIdToken(args.idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      // ...
      // console.log(uid);
      return prisma.user.findUniqueOrThrow({
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
