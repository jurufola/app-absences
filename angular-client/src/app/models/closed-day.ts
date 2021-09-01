enum Category { JOUR_FERIE, RTT_EMPLOYEUR };

export class ClosedDay {
  id: number;
  date: Date;
  category: Category;
}
