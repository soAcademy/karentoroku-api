import { PrismaClient } from "../../prisma/client";
import {
  ICreateEventType,
  ICreateTimeSelect,
  ICreateUser,
} from "./karentoroku.interfaces";
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

export const getUserByFirebaseIdToken = async (args: { idToken: string }) => {
  getAuth(firebaseApp)
    .verifyIdToken(args.idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      // ...
      console.log(uid);
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

export const createTimeSelect = (args: ICreateTimeSelect) => {
  //   {
  //   startTime: number;
  //   endTime: number;
  // }) => {
  return prisma.timeSelect.create({
    data: {
      startTime: args.startTime,
      endTime: args.endTime,
    },
  });
};

export const createLocation = (args: { name: string }) => {
  return prisma.location.create({
    data: {
      name: args.name,
    },
  });
};

export const createEventType = (args: ICreateEventType) => {
  return prisma.eventType.create({
    data: {
      name: args.name,
      description: args.description,
      price: args.price,
      timeDuration: args.timeDuration,
      user: {
        connect: {
          id: args.userId,
        },
      },
      weekDays: {
        create: args.dates.map((d) => {
          return {
            date: new Date(d.date),
            weekDayOnTimeSelects: {
              create: args.timeSlots.map((t) => {
                return {
                  timeSelect: {
                    create: {
                      startTime: t.startTime,
                      endTime: t.endTime,
                    },
                  },
                };
              }),
            },
          };
        }),
      },
      eventTypeOnLocations: {
        create: args.locations.map((l) => {
          return {
            location: {
              connectOrCreate: {
                where: { name: l.locationName },
                create: { name: l.locationName },
              },
            },
          };
        }),
      },
    },
  });
};
