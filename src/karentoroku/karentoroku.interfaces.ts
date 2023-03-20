import * as t from "io-ts";

export const CreateUserCodec = t.type({
  name: t.string,
});

export interface ICreateUser extends t.TypeOf<typeof CreateUserCodec> {}
