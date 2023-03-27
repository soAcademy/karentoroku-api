import * as t from "io-ts";

export const CreateUserCodec = t.type({
  username: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
