


   /*  login: string;
    motDePasse: string;
    nom: string;
    congesPayesRestants: number;
    rttRestants: number;

    // tslint:disable-next-line: max-line-length
    constructor(login = '', motDePasse = '', nom = '', congesPayesRestants = 0, rttRestants = 0) {
        this.login = login;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.congesPayesRestants = congesPayesRestants;
        this.rttRestants = rttRestants;

    } */

import { Role } from './role';

export class User {
  /*id: number;
  login: string;
  motDePasse: string;
  nom: string;
  prenom: string;
  congesPyesRestants: number;
  rttRestants: number;
  role: Role;*/
  constructor(public id: number, public login: string,
              public motDePasse: string, public nom: string, public prenom: string,
              public congesPyesRestants: number, public rttRestants: number, public role: Role ){}


}

