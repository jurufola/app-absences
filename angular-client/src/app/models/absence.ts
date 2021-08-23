enum AbsenceType { PAYE, RTT, FERIE, SANS_SOLDE }


export class Absence {
  id: string;
  beginDate: Date;
  endDate: Date;
  motif: string;
  type: AbsenceType;

}
