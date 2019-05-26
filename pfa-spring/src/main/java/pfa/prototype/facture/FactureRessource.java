package pfa.prototype.facture;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.commande.Commande;
import pfa.prototype.fournisseur.Fournisseur;
import pfa.prototype.fournisseur.FournisseurJpaReporosity;
import pfa.prototype.user.User;
import pfa.prototype.user.UserJpaReporosity;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FactureRessource {
    @Autowired
    private FactureJpaReporosity factureJpaReporosity;
    @GetMapping(path = "/Facture")
    public List<Facture> getAllFacture() {
        return factureJpaReporosity.findAll();
    }

    @PostMapping(path = "/Facture")
    public Facture getAllFacture(@Valid @RequestBody Facture facture) {
        return factureJpaReporosity.save(facture);
    }

    @GetMapping("/Facture/{id}")
    public Facture getFacture(@PathVariable("id") Commande id) {
        return factureJpaReporosity.findByCommandeId(id);
    }
    @DeleteMapping("/Facture/{id}")
    public ResponseEntity<Void> deleteFacture(@PathVariable("id") int id) {
        Facture Facture = factureJpaReporosity.findById(id).get();
        if (Facture == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            factureJpaReporosity.deleteById(id);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }
}
