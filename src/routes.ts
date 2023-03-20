import { createUserHandler } from "./karentoroku/karentoroku.handlers";

export const AppRoutes = [
  {
    path: "/user/create",
    method: "post",
    action: createUserHandler,
  },
];
