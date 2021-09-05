package com.coding.challenge.dao

import com.coding.challenge.entity.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface CategoryRepository:JpaRepository<Category,Long> {
}