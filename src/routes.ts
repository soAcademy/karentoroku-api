import {
  createEventTypeHandler,
  createTimeSelectHandler,
  createUserHandler,
  getIndexHandler,
  getUserByFirebaseIdTokenHandler,
  getUserByIdHandler,
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
    path: "/getUserById",
    method: "post",
    action: getUserByIdHandler,
  },
  {
    path: "/getUserByToken",
    method: "post",
    action: getUserByFirebaseIdTokenHandler,
  },
  {
    path: "/createEventType",
    method: "post",
    action: createEventTypeHandler,
  },
  {
    path: "/createTimeSelect",
    method: "post",
    action: createTimeSelectHandler,
  },
];
