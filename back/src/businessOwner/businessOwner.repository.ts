import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BusinessOwner } from "./entities/businessOwner.entity";
import { Repository } from "typeorm";
import { accounts, businessOwners } from "src/helpers/mookowners";
import { AccountRepository } from "src/account/account.repository";
import { OwnerDto } from "./dto/owner.dto";
import { AccountDto } from "src/account/dto/account.dto";
import { Account } from "src/account/entities/account.entity";

@Injectable()
export class BusinessOwnerRepository {

    constructor(
        @InjectRepository(BusinessOwner)
        private businessOwnerDB: Repository<BusinessOwner>,
        private accountRepository: AccountRepository
    ) {}

    async getOwners(): Promise<BusinessOwner[]> {
        const owners = await this.businessOwnerDB.find({})
        const mookAccounts = accounts
        let index = 0
        if (owners.length < 1) {            
            for ( const owner of businessOwners ) {
                const newOwner = await this.businessOwnerDB.save(owner)
                await this.accountRepository.saveAccount(mookAccounts[index], newOwner)
                index ++
            } 
        } 
        return owners
    }

    async getOwnerById(id: string) {
        const owner = await this.businessOwnerDB.findOne({
            where: {id},
        })
        if (!owner) {
            throw new Error("Owner's information could not be found")
        } return owner
    }

    async createOwner(ownerDto: OwnerDto, accountDto: AccountDto): Promise<BusinessOwner> {      
        const account = new Account
        account.userName = accountDto.userName
        account.password = accountDto.password
        const newOwner = new BusinessOwner
        newOwner.name = ownerDto.name
        newOwner.email = ownerDto.email
        newOwner.phone = ownerDto.phone
        newOwner.DOB = ownerDto.DOB
        const owner = await this.businessOwnerDB.save(newOwner)
        await this.accountRepository.saveAccount(account, newOwner)
        return owner
    }

    async saveOwner(owner: BusinessOwner) {
        this.businessOwnerDB.save(owner)
    }
} 