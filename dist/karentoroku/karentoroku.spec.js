"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const karentoroku_resolvers_1 = require("./karentoroku.resolvers");
describe("Karentaroku", () => {
    const username1 = "alice";
    let userId1;
    // test("should create a new user", async () => {
    //   const result = await createUser({ username: username1 });
    //   userId1 = result.id;
    //   expect(result.username).toStrictEqual(username1);
    // });
    test("should get all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, karentoroku_resolvers_1.getUsers)();
        console.log("getUsers", result);
        expect(result.length > 0).toBe(true);
    }));
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
    test("createCalendarSelect", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            startDate: "29March",
            endDate: "01April",
        };
        const result = yield (0, karentoroku_resolvers_1.createCalendarSelect)(data);
        console.log("createCalendarSelect:", result);
    }));
});
