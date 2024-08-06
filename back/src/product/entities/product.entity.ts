import { Account } from "src/account/entities/account.entity";
import { Recipe } from "src/recipes/entities/recipe.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({
    name: "products"
})
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid("uuid")

    @Column({ nullable: true, length: 50})
    name: string

    @Column("int")
    stock: number

    @Column("float")
    price: number

    @ManyToOne(() => Account, (account)  => account.products_)
    @JoinColumn()
    account_: Account

    @OneToOne( () => Recipe)
    @JoinColumn()
    receipe_: Recipe
}
