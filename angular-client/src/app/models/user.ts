import { Department } from './department';
import { Absence } from './absence';
import { Role } from './role';
export class User {
  id: number;
  login: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  congesPyesRestants: number;
  rttRestants: number;
  role: Role;
  absences: Absence[];
  department: Department;

  constructor(id:number, login:string, motDePasse: string, nom: string, prenom: string,
    congesPyesRestants: number, rttRestants: number){
      this.id = id;
      this.login = login;
      this.motDePasse = motDePasse;
      this.nom = nom;
      this.prenom = prenom;
      this.congesPyesRestants = congesPyesRestants;
      this.rttRestants = rttRestants;

  }
}
