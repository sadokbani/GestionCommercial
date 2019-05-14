package pfa.prototype.fournisseur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FournisseurJpaReporosity extends JpaRepository<Fournisseur, Integer> {
}
