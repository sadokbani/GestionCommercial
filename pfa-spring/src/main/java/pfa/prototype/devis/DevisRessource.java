package pfa.prototype.devis;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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
}
