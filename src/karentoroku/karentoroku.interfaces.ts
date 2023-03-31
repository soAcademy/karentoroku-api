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
  dates: t.array(t.type({ date: t.string })),
  timeSlots: t.array(
    t.type({
      startTime: t.number,
      endTime: t.number,
    })
  ),
locations: t.array(t.type({
  locationName: t.string,
})),
});

export interface ICreateEventType
  extends t.TypeOf<typeof CreateEventTypeCodec> {}

export const CreateTimeSelectCodec = t.type({
  startTime: t.number,
  endTime: t.number,
});

export interface ICreateTimeSelect
  extends t.TypeOf<typeof CreateTimeSelectCodec> {}
