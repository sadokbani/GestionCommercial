package pfa.prototype.facture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.prototype.fournisseur.Fournisseur;

@Repository
public interface FactureJpaReporosity extends JpaRepository<Facture, Integer> {
}
