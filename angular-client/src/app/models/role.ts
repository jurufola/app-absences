import { User } from "./user";

export class Role {
  id: number;
  nomRole: string;
  users: User[];
}
