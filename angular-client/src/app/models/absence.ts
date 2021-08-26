import { User } from "./user";

enum Type { PAYE,RTT,FERIE,SANS_SOLDE }
enum Status { INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE }

export class Absence {
  id: number;
  motif: string;
  dateDebut: Date;
  dateFin: Date;
  absenceType: Type;
  requestStatus: Status;
  user: User;

}
