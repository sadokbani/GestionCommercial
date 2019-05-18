package pfa.prototype.produit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pfa.prototype.fournisseur.Fournisseur;

import java.util.List;

@Repository
public interface ProduitJpaReporosity extends JpaRepository<Produit, Integer> {



    @Query("select u from Produit u where u.quantiteStock>0")
    List<Produit> findAllProd();
}
    