import {
  createEventTypeHandler,
  createUserHandler,
  getEventTypeHandler,
  getIndexHandler,
  getUserByIdHandler,
  getUserByIdTokenHandler,
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
    path: "/getUserByIdToken",
    method: "post",
    action: getUserByIdTokenHandler,
  },
  {
    path: "/createEventType",
    method: "post",
    action: createEventTypeHandler,
  },
  {
    path: "/getEventType",
    method: "post",
    action: getEventTypeHandler,
  },
];
