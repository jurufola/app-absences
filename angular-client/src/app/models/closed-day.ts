enum Category { JOUR_FERIE, RTT_EMPLOYEUR };
enum JourSemaine { LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE };



export class ClosedDay {
  
  constructor(public id:number, public date:Date, public category:Category, public jour: JourSemaine, public commentaire: string){
   
  }
}
