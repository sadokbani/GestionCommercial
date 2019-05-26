package pfa.prototype.devis;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.prototype.commande.Commande;
import pfa.prototype.facture.Facture;


@Repository
public interface DevisJpaReporosity extends JpaRepository<Devis, Integer> {
    Devis findByCommandeId(Commande id);

}
