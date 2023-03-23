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
    const name1 = "David";
    let userId1;
    test("should create a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, karentoroku_resolvers_1.createUser)({ name: name1 });
        userId1 = result.id;
        expect(result.name).toStrictEqual(name1);
    }));
    test("should get all users", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, karentoroku_resolvers_1.getUsers)();
        console.log("getUsers", result);
        expect(result.length > 0).toBe(true);
    }));
    test("should get a user by ID", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, karentoroku_resolvers_1.getUser)({ id: userId1 });
        console.log("getUser", result);
        expect(result.name).toStrictEqual(name1);
    }));
});
