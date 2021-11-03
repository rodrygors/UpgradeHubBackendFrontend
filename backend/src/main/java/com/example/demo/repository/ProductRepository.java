package com.example.demo.repository;

import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query(value = "SELECT * FROM product ORDER BY product.value ASC", nativeQuery = true)
    List<Product> findAllOrderByValueAsc();

    @Query(value = "SELECT * FROM product ORDER BY product.value DESC", nativeQuery = true)
    List<Product> findAllOrderByValueDesc();
}
