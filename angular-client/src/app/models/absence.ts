import { User } from './user';

export enum Type { PAYE,RTT,FERIE,SANS_SOLDE }
export enum Status { INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE }

export class Absence {

  constructor(public id: number, public absenceType: Type, public dateDebut: Date, public dateFin: Date, public motif: string,  public requestStatus: Status, public user: User) {

  };
}
