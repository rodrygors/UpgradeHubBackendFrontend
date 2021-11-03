package com.example.demo.service;

import com.example.demo.exception.UserNotFound;
import com.example.demo.model.Invoice;
import com.example.demo.model.User;
import com.example.demo.repository.InvoiceRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;
    private final InvoiceRepository invoiceRepository;

    public UserService(UserRepository userRepository, InvoiceRepository invoiceRepository) {
        this.userRepository = userRepository;
        this.invoiceRepository = invoiceRepository;
    }

    public List<User> findAllUsers() {

        return userRepository.findAll();
    }


    public void deleteUser(Long id) {
        User user= this.findUserById(id);
        for (Invoice invoice: user.getInvoices()){
            invoice.getInvoice_product().clear();
            invoiceRepository.deleteById(invoice.getId());
        }
        user.getInvoices().clear();
        userRepository.save(user);
        userRepository.deleteById(id);
    }

    public User updateUser(Long id, String name,String password,int age) {
        User user = this.findUserById(id);
        user.setName(name);
       user.setPassword(password);
        user.setAge(age);
        return userRepository.save(user);
    }

    private User findUserById(Long id) {
        return userRepository.findById(id).orElseThrow(UserNotFound::new);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }
}
