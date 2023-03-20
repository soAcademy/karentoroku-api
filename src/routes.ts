import { createUserHandler } from "./karentoroku/karentoroku.handlers";

export const AppRoutes = [
  {
    path: "createUser",
    method: "post",
    action: createUserHandler,
  },
];
