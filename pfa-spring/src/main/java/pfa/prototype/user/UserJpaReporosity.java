package pfa.prototype.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserJpaReporosity extends JpaRepository<User, Integer> {
    User findByAdresseAndPassword(String adr, String pass) ;
}
