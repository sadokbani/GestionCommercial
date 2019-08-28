package pfa.prototype.produit;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.PrototypeApplication;
import pfa.prototype.fournisseur.Fournisseur;
import pfa.prototype.fournisseur.FournisseurJpaReporosity;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProduitRessource {
    private static final Logger logger = LoggerFactory.getLogger(PrototypeApplication.class);
    @Autowired
    private ProduitJpaReporosity produitJpaReporosity;

    @GetMapping(path = "/Produit")
    public List<Produit> getAllTodos() {
        return produitJpaReporosity.findAll();
    }

    @GetMapping(path = "/Produit/rech/{ch}")
    public List<Produit> getProduitCher(@PathVariable("ch") String ch) {
        return produitJpaReporosity.findByNomContaining(ch);
    }

    @GetMapping(path = "/Produit/valide")
    public List<Produit> getAllProd() {
        return produitJpaReporosity.findAllProd();
    }

    @GetMapping(path = "/Produit/invalide")
    public List<Produit> getAllProdi() {
        return produitJpaReporosity.findAllProdAlert();
    }

    @GetMapping("/Produit/{id}")
    public ResponseEntity<Produit> getProduit(@PathVariable("id") Integer id) {
        Produit prod = produitJpaReporosity.findById(id).get();
        if (prod == null) {

            return new ResponseEntity<Produit>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Produit>(prod, HttpStatus.OK);
    }

    @PutMapping(" ")
    public ResponseEntity<Void> updateProduit(@PathVariable("id") Integer id,@RequestBody Produit prod) {
        Produit existingProd = produitJpaReporosity.findById(id).get();
        if (existingProd == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
//            logger.info(existingProd.getQuantiteVendu().toString());
//            logger.info(prod.getQuantiteVendu().toString());
//            logger.info(prod.getQuantiteStock().toString());
            if(prod.getCategorie() != null) existingProd.setCategorie(prod.getCategorie());
            if(prod.getNom() != null) existingProd.setNom(prod.getNom());
            if(prod.getQuantiteVendu() != 0) existingProd.setQuantiteVendu(prod.getQuantiteVendu());
            if(prod.getPrix() != null) existingProd.setPrix(prod.getPrix());
            if(prod.getImage() != null) existingProd.setImage(prod.getImage());
            if(prod.getDescription() != null) existingProd.setDescription(prod.getDescription());
            if(prod.getQuantiteStock() != null) existingProd.setQuantiteStock(prod.getQuantiteStock());
            if(prod.getFourId() != null) existingProd.setFourId(prod.getFourId());

//            logger.info(existingProd.getQuantiteVendu().toString());


            produitJpaReporosity.save(existingProd);

            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }
    @PostMapping("/Produit")
    public Produit createProduit(@Valid @RequestBody Produit prod) {
        return produitJpaReporosity.save(prod);
    }

    @DeleteMapping("/Produit/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable("id") Integer id) {
        Produit prod = produitJpaReporosity.findById(id).get();
        if (prod == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            produitJpaReporosity.deleteById(id);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }

}
