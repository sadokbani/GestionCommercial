package pfa.prototype.lignedecommande;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.prototype.commande.Commande;

import java.util.List;

@Repository
public interface LigneCommandeJpaReporosity extends JpaRepository<Lignedecommande, Integer> {
     List<Lignedecommande> findLignedecommandeByCommande(Commande commande);
}
