import {
  createUserHandler,
  getIndexHandler,
  getUserHandler,
  getUsersHandler,
} from "./karentoroku/karentoroku.handlers";

export const AppRoutes = [
  {
    path: "/",
    method: "get",
    action: getIndexHandler,
  },
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
  {
    path: "/getUser",
    method: "post",
    action: getUserHandler,
  },
];
