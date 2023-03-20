import { Request, Response } from "express";
import { CreateUserCodec } from "./karentoroku.interfaces";
import { createUser } from "./karentoroku.resolvers";

export const createUserHandler = async (req: Request, res: Response) => {
  const args = req?.body;

  if (CreateUserCodec.decode(args)._tag === "Right") {
    try {
      const result = await createUser({
        name: args.name,
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
