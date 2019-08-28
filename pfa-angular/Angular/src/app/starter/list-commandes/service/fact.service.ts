import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prod} from "../../../produits/produit/produit.component";
import {Devis, Facture} from "../list-commandes.component";

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  deleteFacture(id) {
    return this.http.delete(`http://localhost:8080/Facture/${id}`);
  }
  retrieveFacture(id) {
    return this.http.get<Facture>(`http://localhost:8080/Facture/${id}`);
  }

  deleteDevis(id) {
    return this.http.delete(`http://localhost:8080/Devis/${id}`);
  }
  retrieveDevis(id) {
    return this.http.get<Devis>(`http://localhost:8080/Devis/${id}`);
  }

  deleteLigneCommande(id) {
    return this.http.delete(`http://localhost:8080/LigneCommande/${id}`)
  }

  deleteCommande(id){
    return this.http.delete(`http://localhost:8080/Commande/${id}`)
  }

  getAllFact() {
    return this.http.get<[Facture]>(`http://localhost:8080/Facture/`);

  }

}
