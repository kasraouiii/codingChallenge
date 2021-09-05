package com.coding.challenge.entity

import javax.persistence.*


@Entity
data class Product(
        @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        val name:String,
        val price: Double,
        val currency: String,
        @ManyToOne
        val category: Category
)