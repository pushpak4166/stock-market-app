package com.example.StockCharting.Controller;

import com.example.StockCharting.Entity.User1;
import com.example.StockCharting.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class userController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(path = "")
    public ResponseEntity<List<User1>> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<User1> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userRepository.getById(id));
    }

    @PostMapping(path = "")
    public ResponseEntity<?> addUser(@RequestBody User1 user) {
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateUser(@PathVariable long id, @RequestBody User1 user) {
        user.setId(id);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @DeleteMapping(path = "/{id}")
    public void deleteUser(@PathVariable long id) {
        userRepository.deleteById(id);
    }
}