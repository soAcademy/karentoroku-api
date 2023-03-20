import {
  createUserHandler,
  getUsersHandler,
} from "./karentoroku/karentoroku.handlers";

export const AppRoutes = [
  {
    path: "/createUser",
    method: "post",
    action: createUserHandler,
  },
  {
    path: "/getUsers",
    method: "post",
    action: getUsersHandler,
  },
];
