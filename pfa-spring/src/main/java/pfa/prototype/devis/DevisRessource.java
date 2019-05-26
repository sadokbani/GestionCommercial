package pfa.prototype.devis;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.commande.Commande;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DevisRessource {
    @Autowired
    private DevisJpaReporosity DevisJpaReporosity;

    @GetMapping(path = "/Devis")
    public List<Devis> getAllDevis() {
        return DevisJpaReporosity.findAll();
    }

    @PostMapping(path = "/Devis")
    public Devis getAllDevis(@Valid @RequestBody Devis Devis) {
        return DevisJpaReporosity.save(Devis);
    }

    @GetMapping("/Devis/{id}")
    public Devis getDevis(@PathVariable("id") Commande id) {
        return DevisJpaReporosity.findByCommandeId(id);
    }

    @DeleteMapping("/Devis/{id}")
    public ResponseEntity<Void> deleteDevis(@PathVariable("id") int id) {
        Devis devis = DevisJpaReporosity.findById(id).get();
        if (devis == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            DevisJpaReporosity.deleteById(id);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }
}
