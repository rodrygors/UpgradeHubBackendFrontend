package com.example.demo.controller;


import com.example.demo.controller.request.InvoiceRequest;
import com.example.demo.controller.request.ProductRequest;
import com.example.demo.controller.response.InvoiceResponse;
import com.example.demo.controller.response.ProductResponse;
import com.example.demo.model.Invoice;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    public List<ProductResponse> createProductResponseList(List<Product> products) {
        List<ProductResponse> productResponseList = new ArrayList<>();

        if (!products.isEmpty()) {
            for (Product product : products) {
                productResponseList.add(product.createProductResponse());
            }
        }
        return productResponseList;

    }


    @GetMapping("/products/{id}")
    public ProductResponse getById(@PathVariable Long id) {
        return productService.findById(id).createProductResponse();
    }

    @GetMapping("/products")
    public List<ProductResponse> getAllProducts() {
        return createProductResponseList(productService.findAll());
    }

    @GetMapping("/products/sort/{sort}")
    public List<ProductResponse> getSortedProducts(@PathVariable(value = "sort") String sort){
        return createProductResponseList(productService.getSortedProducts(sort));
    }

    @PostMapping("/products")
    public ProductResponse createProduct(@RequestBody ProductRequest productRequest) {
        return productService.addProduct(productRequest.createProduct()).createProductResponse();
    }

    @DeleteMapping(value = "/product/{id}")
    public void deleteProduct(@PathVariable(value = "id") Long id){
        productService.deleteProduct(id);
    }
}
