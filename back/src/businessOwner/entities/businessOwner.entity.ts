import { Account } from 'src/account/entities/account.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity({
    name: "owners"
})
export class BusinessOwner {
    
    @PrimaryGeneratedColumn("uuid")
    id: string = uuid("uuid")

    @Column({ length: 50, nullable: true})
    name: string

    @Column({ length: 50, nullable: true, unique: true})
    email: string

    @Column({nullable: true})
    phone: number

    @Column({nullable: true})
    DOB: string

    @OneToOne( () => Account)
    account_: Account
}
