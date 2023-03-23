import { createUser, getUser, getUsers } from "./karentoroku.resolvers";

describe("Karentaroku", () => {
  const name1 = "David";
  let userId1: number;

  test("should create a new user", async () => {
    const result = await createUser({ name: name1 });
    userId1 = result.id;
    expect(result.name).toStrictEqual(name1);
  });

  test("should get all users", async () => {
    const result = await getUsers();
    console.log("getUsers", result);
    expect(result.length > 0).toBe(true);
  });

  test("should get a user by ID", async () => {
    const result = await getUser({ id: userId1 });
    console.log("getUser", result);
    expect(result.name).toStrictEqual(name1);
  });
});
