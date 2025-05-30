package ma.emsi.emstudy.Repository;

import ma.emsi.emstudy.Entity.Student;
import ma.emsi.emstudy.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByUserIdAndRoleEquals(Long id, String role);}
