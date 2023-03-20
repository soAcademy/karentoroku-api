import { createUser } from "./karentoroku.resolvers";

describe("Karentaroku", () => {
  test("should create a new user", async () => {
    const name1 = "Bob";

    const result = await createUser({ name: name1 });
    expect(result.name).toEqual(name1);
  });
});
