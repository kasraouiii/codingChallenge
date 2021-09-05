package com.coding.challenge.dao

import com.coding.challenge.entity.Product
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource


@RepositoryRestResource
interface ProductRepository:JpaRepository<Product,Long> {
}