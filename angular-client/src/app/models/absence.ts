import { User } from './user';
import { Status } from './status';
import { Type } from './type';
export class Absence {

  constructor(public id: number, public absenceType: Type, public dateDebut: Date, public dateFin: Date, public motif: string,  public requestStatus: Status, public user: User) {

  };
}
