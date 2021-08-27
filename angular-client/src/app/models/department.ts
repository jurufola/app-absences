import { User } from "./user";

export class Department {
  id: number;
  nom: string;
  users: User[];
  manager: User;
}
