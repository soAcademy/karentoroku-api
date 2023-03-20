import { PrismaClient } from "../../prisma/client";
import { ICreateUser } from "./karentoroku.interfaces";

export const prisma = new PrismaClient();

export const createUser = (args: ICreateUser) => {
  return prisma.user.create({
    data: {
      name: args.name,
    },
  });
};

export const getUsers = () => {
  return prisma.user.findMany({
    select: {
      name: true,
    },
  });
};
