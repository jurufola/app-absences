import { Status } from './status';
import { AbsenceType } from './type';
export class Absence {
  type: AbsenceType;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: Status;
  constructor(type: AbsenceType, startDate: Date, endDate: Date, reason: string, status: Status) {
      this.type = type;
      this.startDate = startDate;
      this.endDate = endDate;
      this.reason = reason;
      this.status = status;
    };
}
