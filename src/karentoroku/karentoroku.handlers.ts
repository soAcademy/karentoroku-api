import { Request, Response } from "express";
import { CreateUserCodec } from "./karentoroku.interfaces";
import {
  createUser,
  getUser,
  getUserByFirebaseIdToken,
  getUsers,
} from "./karentoroku.resolvers";

export const getIndexHandler = (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).end(`Hello!`);
};

export const createUserHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (CreateUserCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUser({
        username: args.username,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (CreateUserCodec)" });
  }
};

export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const result = await getUsers();
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      error: String(e),
    });
  }
};

export const getUserHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (typeof args.id === "number") {
    try {
      const result = await getUser({
        id: args.id,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({ error: "ERROR: invalid request (getUser)" });
  }
};

export const getUserByFirebaseIdTokenHandler = async (
  req: Request,
  res: Response
) => {
  const args = req?.body;

  if (typeof args.idToken === "string") {
    try {
      const result = getUserByFirebaseIdToken({
        idToken: args.idToken,
      });
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({
        error: String(e),
      });
    }
  } else {
    res.status(500).json({
      error: "ERROR: invalid request (getUserByFirebaseIdTokenHandler)",
    });
  }
};
