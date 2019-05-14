package pfa.prototype.devis;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DevisJpaReporosity extends JpaRepository<Devis, Integer> {
}
