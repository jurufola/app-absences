import { User } from "./User";

export class Department {
  id: number;
  nom: string;
  users: User[];
  manager: User;
}
