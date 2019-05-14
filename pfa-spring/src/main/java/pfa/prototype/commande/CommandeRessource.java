package pfa.prototype.commande;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.user.User;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommandeRessource {
    @Autowired
    private CommandeJpaReporosity commandeJpaReporosity;
    @GetMapping(path = "/Commande")
    public List<Commande> getAllCommandes() {
        return commandeJpaReporosity.findAll();
    }

    @PostMapping(path = "/Commande")
    public Commande createCommande (@Valid @RequestBody Commande commande){
        return this.commandeJpaReporosity.save(commande);
    }

    @PutMapping("/Commande/{id}")
    public ResponseEntity<Void> updateProduit(@PathVariable("id") Integer id, @RequestBody Commande commande){
        Commande existingCommande = this.commandeJpaReporosity.findById(id).get();
        if (existingCommande == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            if(commande.getEtat() != null) existingCommande.setEtat(commande.getEtat());
            this.commandeJpaReporosity.save(existingCommande);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }

    @GetMapping(path = "/Commande/{idUser}")
    public List<Commande> getCommadeByIdUser(@PathVariable("idUser") User id){
        return (List<Commande>) commandeJpaReporosity.findByUserId(id);
    }

}
