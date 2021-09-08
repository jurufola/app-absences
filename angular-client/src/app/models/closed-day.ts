enum Category { JOUR_FERIE, RTT_EMPLOYEUR };
enum JourSemaine { LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE };



export class ClosedDay {
  id: number;
  date: Date;
  category: Category;
  jour: JourSemaine;
  commentaire: string;

  constructor(id:number, date:Date, category:Category, jour: JourSemaine, commentaire: string){
    this.id = id;
    this.date = date;
    this.category = category;
    this.jour = jour;
    this.commentaire = commentaire;
  }
}
