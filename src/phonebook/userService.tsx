import { data } from "./data";

interface User {
  id: number;
  email: string;
}
export const userService = {
  findAll() {
    return data.users;
  },

  create(user: User) {
    data.users.push(user);
  },

  destroy(id: number) {
    data.users.splice(
      data.users.findIndex((user: any) => user.id === id),
      1
    );
  },

  update(id: number, user: User) {
    data.users[data.users.findIndex((user: any) => user.id === id)] = user;
  },
};
