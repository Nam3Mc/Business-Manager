import { Item } from "src/items/entities/item.entity";
import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid} from "uuid"

@Entity({
    name: "recipes"
})
export class Recipe {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid("uuid")

    @Column("money")
    price: number

    @OneToMany(() => Item, (item) => item.recipe_)
    items_: Item[]
}
