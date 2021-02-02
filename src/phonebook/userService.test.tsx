import { userService } from './userService';
import { data } from './data';

describe("유저 CRUD 테스트", () => {
  beforeEach(() => {
    data.users.push(
      { id: 1, email: "user1@test.com" },
      { id: 2, email: "user2@test.com" },
      { id: 3, email: "user3@test.com" }
    );
  });

  afterEach(() => {
    data.users.splice(0);
  });

  it("모든 유저정보 읽기", () => {
    const users = userService.findAll();

    expect(users).toHaveLength(3);
    expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
    expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
    expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
  });

  it("유저 생성하기", () => {
    const user = { id: 4, email: "user4@test.com" };
    const length = data.users.length;

    userService.create(user);

    expect(data.users).toHaveLength(length + 1);
    expect(data.users).toContainEqual(user);
  });

  it("유저 삭제하기", () => {
    const id = 3;
    const length = data.users.length;
    const user = data.users.find((user:any) => user.id === id);

    userService.destroy(id);

    expect(data.users).toHaveLength(length - 1);
    expect(data.users).not.toContainEqual(user);
  });

  it("유저정보 수정하기", () => {
    const id = 2;
    const email = `admin${id}@test.com`;

    userService.update(id, { id, email });

    const user = data.users.find((user:any) => user.id === id);
    expect(user).toHaveProperty("email", email);
  });
});
