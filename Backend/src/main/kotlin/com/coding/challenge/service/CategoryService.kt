package com.coding.challenge.service;

import com.coding.challenge.dao.CategoryRepository
import com.coding.challenge.dto.CategoryDTO;
import com.coding.challenge.entity.Category;
import com.coding.challenge.entity.Product
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*


@Service
public class CategoryService {
    @Autowired
    lateinit var categoryRepository: CategoryRepository
    fun saveCategory(categoryDTO:CategoryDTO):Category  {
        var category = Category(categoryDTO.id,categoryDTO.name,categoryDTO.description,ArrayList())
        return categoryRepository.save(category);
    }

    fun getAllCategories(): List<Category> {
        return categoryRepository.findAll()
    }

    fun deleteCategory(id: Long) {
        categoryRepository.deleteById(id)
    }

    fun getCategoryById(id: Long): Category {
        return categoryRepository.getById(id)
    }


}
