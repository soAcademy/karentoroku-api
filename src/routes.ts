import {
  createCalendarSelectHandler,
  // createEventTypeHandler,
  createUserHandler,
  getIndexHandler,
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
  // {
  //   path: "/createEventType",
  //   method: "post",
  //   action: createEventTypeHandler,
  // }
  {
    path: "/createCalendarSelect",
    method: "post",
    action: createCalendarSelectHandler,
  }
];
