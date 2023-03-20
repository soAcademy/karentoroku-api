import { createUser, getUsers } from "./karentoroku.resolvers";

describe("Karentaroku", () => {
  test("should create a new user", async () => {
    const name1 = "Bob";

    const result = await createUser({ name: name1 });
    expect(result.name).toEqual(name1);
  });

  test("should get all users", async () => {
    const result = await getUsers();
    console.log("getCategories", result);
    expect(result.length > 0).toBe(true);
  });
});
