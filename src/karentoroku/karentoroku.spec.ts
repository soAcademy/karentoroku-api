import {
  createCalendarSelect,
  // createEventType,
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

  test("should get all users", async () => {
    const result = await getUsers();
    console.log("getUsers", result);
    expect(result.length > 0).toBe(true);
  });

  // test("should get a user by ID", async () => {
  //   const result = await getUserById({ id: userId1 });
  //   console.log("getUser", result);
  //   expect(result.username).toStrictEqual(username1);
  // });

  // test("createEventType", async () => {
  //   const data = {
  //     name: "Meeting 30min",
  //     description: "Test",
  //     price: 500,
  //     timeDuration: 30,
  //     status: "upcoming",
  //     username: "Takuna",
  //     user_Name: "Korayut",
  //     firebaseId: "1234",
  //     customer_name: "Natt",
  //     email: "abc@ac.com",
  //     startDate: "29032023",
  //     endDate: "01042023",
  //   };
  //   const result = await createEventType(data);
  //   console.log("createEventType:", result);
  //   expect(result.price === data.price).toBe(true);
  // });

  test("createCalendarSelect", async () => {
    const data = {
      startDate: "29March",
      endDate: "01April",
    };
    const result = await createCalendarSelect(data);
    console.log("createCalendarSelect:", result);
  });
});
