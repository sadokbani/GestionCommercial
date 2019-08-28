package pfa.prototype.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pfa.prototype.fournisseur.Fournisseur;
import pfa.prototype.fournisseur.FournisseurJpaReporosity;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserRessource {
    @Autowired
    private UserJpaReporosity UserJpaReporosity;
    @GetMapping(path = "/User")
    public List<User> getAllUser() {
        return UserJpaReporosity.findAll();
    }
    @PostMapping("/User")
    public User createUser(@Valid @RequestBody User user) {
        BCryptPasswordEncoder a= new BCryptPasswordEncoder();
        user.setPassword(a.encode(user.getPassword()));
        return UserJpaReporosity.save(user);
    }

//    @GetMapping("/User/{id}")
//    public User getUserById(@PathVariable(value = "id") Integer UserId) {
//        return UserJpaReporosity.findById(UserId).get();
//    }
    @GetMapping("/User/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {
        User user = UserJpaReporosity.findById(id).get();
        if (user == null) {

            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/User/{adresse}/{password}")
    public ResponseEntity<User> getUser(@PathVariable("adresse") String adr, @PathVariable("password") String pass) {
        BCryptPasswordEncoder a = new BCryptPasswordEncoder();
        User user1 = UserJpaReporosity.findByAdresse(adr);
        if (user1 == null) {

            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        } else {
            if (a.matches(pass, user1.getPassword())) {

                return new ResponseEntity<User>(user1, HttpStatus.OK);
            }
        }return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/User/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Integer id) {
        User user = UserJpaReporosity.findById(id).get();
        if (user == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            UserJpaReporosity.deleteById(id);
            return new ResponseEntity<Void>(HttpStatus.GONE);
        }
    }
//    @PutMapping("/User/{id}")
//    public ResponseEntity<User> updateEmployee(@PathVariable("id") Integer id, @RequestBody User user) {
//        User User = UserJpaReporosity.findById(id).get();
//        if (User == null) {
//
//            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
//        } else {
//            UserJpaReporosity.save(user);
//            return new ResponseEntity<User>(HttpStatus.OK);
//        }
//    }
@PutMapping("/User/{id}")
    public ResponseEntity<Void> updateEmployee(@PathVariable("id") Integer id,@RequestBody User user) {
        User existingUser = UserJpaReporosity.findById(id).get();
        BCryptPasswordEncoder a = new BCryptPasswordEncoder();
        if (existingUser == null) {

            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        } else {
            if(user.getNom() != null) existingUser.setNom(user.getNom());
            if(user.getPays() != null) existingUser.setPays(user.getPays());
            if(user.getTelephone() != null) existingUser.setTelephone(user.getTelephone());
            if(user.getAdresse() != null) existingUser.setAdresse(user.getAdresse());
            if(user.getPrenom() != null) existingUser.setPrenom(user.getPrenom());
            if(user.getPassword() != null) existingUser.setPassword(a.encode(user.getPassword()));
            if(user.getGrade() != null) existingUser.setGrade(user.getGrade());
            UserJpaReporosity.save(existingUser);

            return new ResponseEntity<Void>(HttpStatus.OK);
        }
    }

}
