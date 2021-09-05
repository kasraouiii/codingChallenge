package com.coding.challenge.controller

import com.coding.challenge.dto.ProductDTO
import com.coding.challenge.entity.Product
import com.coding.challenge.service.ProductService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RequestMapping("/products")
@RestController
@CrossOrigin("*")
class ProductController {
    @Autowired
    lateinit var productService: ProductService

    @GetMapping
    fun getProducts():List<Product>{
        return productService.getAllProducts()
    }

    @PostMapping
    fun saveProduct(@RequestBody product:ProductDTO):Product{

        return productService.saveProduct(product)
    }
    @GetMapping("/{id}")
    fun getProduct(@PathVariable id:Long):Product{
        return productService.getProductById(id)
    }

    @DeleteMapping("/{id}")
    fun deleteProduct(@PathVariable id:Long){
        productService.deleteProduct(id)
    }

    @PutMapping("/{id}")
    fun updateProduct(@RequestBody product: ProductDTO):Product{
        return productService.saveProduct(product)
    }
}