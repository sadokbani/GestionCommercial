package pfa.prototype.fournisseur;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FournisseurRessource {
    @Autowired
    private FournisseurJpaReporosity fournisseurJpaReporosity;
    @GetMapping(path = "/Fournisseur")
    public List<Fournisseur> getAllFournisseur() {
        return fournisseurJpaReporosity.findAll();
    }
    @PostMapping("/Fournisseur")
    public Fournisseur createFournisseur(@Valid @RequestBody Fournisseur four) {
        return fournisseurJpaReporosity.save(four);
    }

//    @GetMapping("/Fournisseur/{id}")
//    public Fournisseur getFournisseurById(@PathVariable(value = "id") Integer fournisseurId) {
//        return fournisseurJpaReporosity.findById(fournisseurId).get();
//    }
    @GetMapping("/Fournisseur/{id}")
    public ResponseEntity<Fournisseur> getFournisseur(@PathVariable("id") Integer id) {
        Fournisseur four = fournisseurJpaReporosity.findById(id).get();
        if (four == null) {

            return new ResponseEntity<Fournisseur>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Fournisseur>(four, HttpStatus.OK);
    }

    @DeleteMapping("/Fournisseur/{id}")
    public ResponseEntity<Void> deleteFournisseur(@PathVariable("id") Integer id) {
        Fournisseur four = fournisseurJpaReporosity.findById(id).get();
        if (four == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            fournisseurJpaReporosity.deleteById(id);
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }
//    @PutMapping("/Fournisseur/{id}")
//    public ResponseEntity<Fournisseur> updateEmployee(@PathVariable("id") Integer id, @RequestBody Fournisseur four) {
//        Fournisseur fournisseur = fournisseurJpaReporosity.findById(id).get();
//        if (fournisseur == null) {
//
//            return new ResponseEntity<Fournisseur>(HttpStatus.NOT_FOUND);
//        } else {
//            fournisseurJpaReporosity.save(four);
//            return new ResponseEntity<Fournisseur>(HttpStatus.OK);
//        }
//    }
@PutMapping("/Fournisseur/{id}")
    public ResponseEntity<Void> updateEmployee(@PathVariable("id") Integer id,@RequestBody Fournisseur four) {
        Fournisseur existingEmp = fournisseurJpaReporosity.findById(id).get();
        if (existingEmp == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            if(four.getNom() != null) existingEmp.setNom(four.getNom());
            if(four.getAdresse() != null) existingEmp.setAdresse(four.getAdresse());
            if(four.getMail() != null) existingEmp.setMail(four.getMail());
            if(four.getTelephone() != null) existingEmp.setTelephone(four.getTelephone());
            fournisseurJpaReporosity.save(existingEmp);

            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }

}
