package com.coding.challenge.service;


import com.coding.challenge.dao.CategoryRepository
import com.coding.challenge.dao.ProductRepository
import com.coding.challenge.dto.ProductDTO
import com.coding.challenge.entity.Product;
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    lateinit var productRepository: ProductRepository
    @Autowired
    lateinit var categoryRepository: CategoryRepository
    fun saveProduct(productDTO:ProductDTO):Product{
        var product=Product(productDTO.id,productDTO.name,productDTO.price,productDTO.currency,categoryRepository.getById(productDTO.fk_category))
        return productRepository.save(product)
    }
    fun deleteProduct(id:Long){
        productRepository.deleteById(id)
    }
    fun getProductById(id:Long):Product{
        return productRepository.getById(id)
    }
    fun getAllProducts():List<Product>{
        return productRepository.findAll()
    }

}
