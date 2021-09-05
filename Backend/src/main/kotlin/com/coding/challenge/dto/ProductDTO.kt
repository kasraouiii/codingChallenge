package com.coding.challenge.dto

data class ProductDTO(val id:Long,val name:String,val price:Double,val fk_category:Long,val currency: String
) {
}