import * as t from "io-ts";
import { optional, strict } from "io-ts-extra";

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
  dateDaySlots: t.array(
    t.type({
      dayName: t.string,
      date: t.string,
    })
  ),
  timeSlots: t.array(
    t.type({
      startTime: t.number,
      endTime: t.number,
    })
  ),
  locations: t.array(
    t.type({
      locationName: t.string,
    })
  ),
});

export interface ICreateEventType
  extends t.TypeOf<typeof CreateEventTypeCodec> {}
