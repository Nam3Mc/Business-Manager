import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Recipe } from "./entities/recipe.entity";
import { Repository } from "typeorm";
import { ItemsRepository } from "src/items/items.repository";
import { MeasureType } from "src/items/entities/item.entity";

@Injectable()
export class RecipesRepository{
    constructor(
        @InjectRepository(Recipe)
        private recipesDB: Repository<Recipe>,
        private itemsRepository: ItemsRepository
    ) {}

    async createRecipe(items: [{id: string, quantity: number}]) {

        let total = 0
        const recipeItems = []

        for ( const object of items ) {
            const item = await this.itemsRepository.getItemById(object.id)

            if (item.measureType === MeasureType.GRAMS || item.measureType === MeasureType.ML) {
                item.stock -= object.quantity
                const value = item.price * object.quantity / 1000
                total += value
            }
            if (item.measureType === MeasureType.UNIT) {
                item.stock -= object.quantity
                const value = item.price / item.quantity * object.quantity
                total += value
            }
            recipeItems.push(item)
            this.itemsRepository.saveItem(item)

        }
        const newRecipe = new Recipe
        newRecipe.price = total
        newRecipe.items_ = recipeItems
        await this.recipesDB.save(newRecipe)
        console.log(total)
        return newRecipe
    }
}