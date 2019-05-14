package pfa.prototype.produit;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.fournisseur.Fournisseur;
import pfa.prototype.fournisseur.FournisseurJpaReporosity;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProduitRessource {
    @Autowired
    private ProduitJpaReporosity produitJpaReporosity;

    @GetMapping(path = "/Produit")
    public List<Produit> getAllTodos() {
        return produitJpaReporosity.findAll();
    }

    @GetMapping(path = "/Produit/valide")
    public List<Produit> getAllProd() {
        return produitJpaReporosity.findAllProd();
    }

    @GetMapping("/Produit/{id}")
    public ResponseEntity<Produit> getProduit(@PathVariable("id") Integer id) {
        Produit prod = produitJpaReporosity.findById(id).get();
        if (prod == null) {

            return new ResponseEntity<Produit>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Produit>(prod, HttpStatus.OK);
    }

    @PutMapping("/Produit/{id}")
    public ResponseEntity<Void> updateProduit(@PathVariable("id") Integer id,@RequestBody Produit prod) {
        Produit existingProd = produitJpaReporosity.findById(id).get();
        if (existingProd == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            if(prod.getCategorie() != null) existingProd.setCategorie(prod.getCategorie());
            if(prod.getNom() != null) existingProd.setNom(prod.getNom());
            if(prod.getPrix() != null) existingProd.setPrix(prod.getPrix());
            if(prod.getImage() != null) existingProd.setImage(prod.getImage());
            if(prod.getDescription() != null) existingProd.setDescription(prod.getDescription());
            if(prod.getQuantiteStock() != null) existingProd.setQuantiteStock(prod.getQuantiteStock());


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
