import { Status } from './status';
import { Type } from './type';
export class Absence {

  constructor(public id: BigInt, public type: Type, public dateDebut: Date, public dateFin: Date, public motif: string,  public status: Status, public userId: bigint) {

  };
}
