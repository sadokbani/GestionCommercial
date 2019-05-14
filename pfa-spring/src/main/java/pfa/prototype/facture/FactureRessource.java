package pfa.prototype.facture;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.fournisseur.Fournisseur;
import pfa.prototype.fournisseur.FournisseurJpaReporosity;

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
}
