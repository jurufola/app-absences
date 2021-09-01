enum Category { JOUR_FERIE, RTT_EMPLOYEUR };
//enum Jour { LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE};

export class ClosedDay {
  id: number;
  date: Date;
 // jour: Jour;
  category: Category;
  //commentaires:string;

}
