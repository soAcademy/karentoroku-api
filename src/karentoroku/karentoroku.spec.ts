import {
  createUser,
  getUserById,
  getUsers,
} from "./karentoroku.resolvers";

describe("Karentaroku", () => {
  const username1 = "alice";
  let userId1: number;

  // test("should create a new user", async () => {
  //   const result = await createUser({ username: username1 });
  //   userId1 = result.id;
  //   expect(result.username).toStrictEqual(username1);
  // });

  // test("should get all users", async () => {
  //   const result = await getUsers();
  //   console.log("getUsers", result);
  //   expect(result.length > 0).toBe(true);
  // });

  // test("should get a user by ID", async () => {
  //   const result = await getUserById({ id: userId1 });
  //   console.log("getUser", result);
  //   expect(result.username).toStrictEqual(username1);
  // });
  
});
