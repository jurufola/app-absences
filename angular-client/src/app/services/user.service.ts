import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly API_URL="http://localhost:8090/"
  readonly ENDPOINT_user="/user"

  constructor(private httpClient: HttpClient) { }
  getUser(){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_user)

  }
}
