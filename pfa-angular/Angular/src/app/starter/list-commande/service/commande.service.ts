import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comm, LigneCommande} from "../list-commande.component";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) {
  }

  updateCommande(id, commande) {
    return this.http.put(`http://localhost:8080/Commande/${id}`, commande);
  }

  getAllCommande(){
    return this.http.get<[Comm]>(`http://localhost:8080/Commande`);
  }

  ajoutCommande(commande) {
    return this.http.post(`http://localhost:8080/Commande`, commande);
  }

  ajoutLigneCommande(lignecommande) {
    return this.http.post(`http://localhost:8080/LigneCommande`, lignecommande);
  }

  ajoutFacture(facture) {
    return this.http.post(`http://localhost:8080/Facture`, facture);
  }

  ajoutDevis(Devis) {
    return this.http.post(`http://localhost:8080/Devis`, Devis);
  }

  getCommande(idUser) {
    return this.http.get<[Comm]>(`http://localhost:8080/Commande/${idUser}`);
  }

  getLigne(id) {
    return this.http.get<[any]>(`http://localhost:8080/LigneCommande/${id}`);
  }
  getLigneCommande(idCom) {
    return this.http.get<[LigneCommande]>(`http://localhost:8080/LigneCommande/${idCom}`);
  }
}
