package pfa.prototype.lignedecommande;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.commande.Commande;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class LigneCommandeRessource {
    @Autowired
    private LigneCommandeJpaReporosity LignecommandeJpaReporosity;
    @GetMapping(path = "/LigneCommande")
    public List<Lignedecommande> getAllLigneCommandes() {
        return LignecommandeJpaReporosity.findAll();
    }

    @PostMapping(path = "/LigneCommande")
    public Lignedecommande createCommande (@Valid @RequestBody Lignedecommande commande){
        return this.LignecommandeJpaReporosity.save(commande);
    }

    @GetMapping(path = "/LigneCommande/{idCom}")
    public List<Lignedecommande> getCommadeByIdUser(@PathVariable("idCom") Commande id){
        return (List<Lignedecommande>) LignecommandeJpaReporosity.findLignedecommandeByCommande(id);
    }
}
