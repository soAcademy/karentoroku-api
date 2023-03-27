import { PrismaClient } from "../../prisma/client";
import { ICreateUser } from "./karentoroku.interfaces";

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
