package com.coding.challenge.entity

import javax.persistence.*


@Entity
data class Category (
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id:Long,
    val name:String,
    val description:String,
    @OneToMany
    val products:List<Product>
)
