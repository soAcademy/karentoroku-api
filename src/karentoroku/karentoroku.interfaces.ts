import * as t from "io-ts";

export const CreateUserCodec = t.type({
  name: t.string,
  username: t.string,
  idToken: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}

export const CreateEventTypeCodec = t.type({
  name: t.string,
  description: t.string,
  price: t.number,
  timeDuration: t.number,
  userId: t.number,
  date: t.string,
  startTime: t.string,
  endTime: t.string,
});

export interface ICreateEventType extends t.TypeOf<typeof CreateEventTypeCodec>{}