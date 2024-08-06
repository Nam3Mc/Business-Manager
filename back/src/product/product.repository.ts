import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
import { Item } from "src/items/entities/item.entity";
import { Recipe } from "src/recipes/entities/recipe.entity";
import { ItemsRepository } from "src/items/items.repository";


@Injectable()
export class ProdcutRepositorry {

    constructor( @InjectRepository(Product)
        private productDB: Repository<Product>,
        private itemsRepository: ItemsRepository
    ){}

    async getProducts(): Promise<Product[]> {
        const products = await this.productDB.find()
        if ( !products ) {
            throw new Error("You have any new product.")
        } else {
            return products
        }
    }

    async getProductById(id: string) {
        const product = await this.productDB.findOne({
            where: {id}
        })
        if ( !product ) {
            throw new Error("This product does not exist")
        } else {
            return product
        }
    }

    async createProduct(recipe: Recipe): Promise<Product> {
        let total: number = 0
        const product = new Product

        return product

    }
}