package pfa.prototype.commande;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.prototype.user.User;

import java.util.List;

@Repository
public interface CommandeJpaReporosity extends JpaRepository<Commande, Integer> {
    List<Commande> findByUserId(User id) ;
}
