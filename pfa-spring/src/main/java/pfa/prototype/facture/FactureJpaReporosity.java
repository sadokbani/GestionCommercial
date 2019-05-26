package pfa.prototype.facture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pfa.prototype.commande.Commande;
import pfa.prototype.fournisseur.Fournisseur;

@Repository
public interface FactureJpaReporosity extends JpaRepository<Facture, Integer> {
    @Query("delete from Facture u where u.commandeId= :id")
    void deleteByCommandeId(@Param("id") Commande id);
    Facture findByCommandeId(Commande id);
}
