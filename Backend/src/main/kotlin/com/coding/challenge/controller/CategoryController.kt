package com.coding.challenge.controller

import com.coding.challenge.dao.CategoryRepository
import com.coding.challenge.dto.CategoryDTO
import com.coding.challenge.entity.Category
import com.coding.challenge.entity.Product
import com.coding.challenge.service.CategoryService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.util.*

@RequestMapping("/categories")
@RestController
@CrossOrigin("*")
class CategoryController {
    @Autowired
    lateinit var categoryService: CategoryService

    @GetMapping
    fun getCategories():List<Category>{
        return categoryService.getAllCategories()
    }

    @PostMapping
    fun saveCategory(@RequestBody category: CategoryDTO): Category {
        return categoryService.saveCategory(category)
    }

    @PutMapping("/{id}")
    fun updateCategory(@RequestBody category: CategoryDTO): Category{
        return categoryService.saveCategory(category)
    }

    @DeleteMapping("/{id}")
    fun deleteCategory(@PathVariable id:Long){
        categoryService.deleteCategory(id)
    }

    @GetMapping("/{id}")
    fun getCategory(@PathVariable id:Long):Category{
        return categoryService.getCategoryById(id)
    }
}