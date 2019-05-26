import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Prod} from '../produit/produit.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  retrieveAllProduits()  {
    return this.http.get<[Prod]>(`http://localhost:8080/Produit`);
  }
  retrieveAllProduitsV()  {
    return this.http.get<[Prod]>(`http://localhost:8080/Produit/valide`);
  }
  deleteProduit(id) {
    return this.http.delete(`http://localhost:8080/Produit/${id}`);
  }
  retrieveProduit(id) {
    return this.http.get<Prod>(`http://localhost:8080/Produit/${id}`);
  }
  updateProduit(id, prod) {
    return this.http.put(`http://localhost:8080/Produit/${id}`, prod);
  }
  ajoutProduit(prod) {
    return this.http.post(`http://localhost:8080/Produit`, prod);
  }


}
