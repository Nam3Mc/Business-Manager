import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

export enum MeasureType {
    UNIT = "unit",
    ML = "ml",
    GRAMS = "gm"
}

@Entity({
    name: "items"
})
export class Item {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid("uuid")

    @Column({ length: 50, nullable: true})
    name: string

    @Column({ type: "enum", enum: MeasureType})
    measureType: MeasureType
    
    @Column("float")
    quantity: number
    
    @Column( "float", {nullable: false, })
    price: number

    @Column("float")
    stock: number

    @ManyToOne( () => Recipe, (recipe) => recipe.items_)
    recipe_: Recipe
}
