import {
  createUserHandler,
  getIndexHandler,
  getUserByFirebaseIdTokenHandler,
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
  {
    path: "/getUserByFirebaseId",
    method: "post",
    action: getUserByFirebaseIdTokenHandler,
  },
];
