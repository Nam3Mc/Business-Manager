import { BusinessOwner } from "src/businessOwner/entities/businessOwner.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({
    name: "accounts"
})
export class Account {

    @PrimaryGeneratedColumn("uuid")
    id: string = uuid("uuid")

    @Column({ length: 20, nullable: true, unique: true })
    userName:string
    
    @Column({ length: 15, nullable: true})
    password: string

    @OneToOne( () => BusinessOwner)
    @JoinColumn()
    onwner_: BusinessOwner

    @OneToMany(() => Product, (product) => product.account_)
    products_: Product[]
}
