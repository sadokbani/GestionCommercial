import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Fournisseur} from '../fournisseurs.component';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }

  retrieveAllFournisseurs()  {
    return this.http.get<[Fournisseur]>(`http://localhost:8080/Fournisseur`);
  }
  deleteFournisseur(id) {
    return this.http.delete(`http://localhost:8080/Fournisseur/${id}`);
  }
  retrieveFournisseur(id) {
    return this.http.get<Fournisseur>(`http://localhost:8080/Fournisseur/${id}`);
  }
  updateFournisseur(id, four) {
    return this.http.put(`http://localhost:8080/Fournisseur/${id}`, four);
  }
  ajoutFournisseur(four) {
    return this.http.post(`http://localhost:8080/Fournisseur`, four);
  }
}
