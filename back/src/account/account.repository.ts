import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./entities/account.entity";
import { Repository } from "typeorm";
import { BusinessOwner } from "src/businessOwner/entities/businessOwner.entity";

@Injectable()
export class AccountRepository {

    constructor(
        @InjectRepository(Account)
        private accountDB: Repository<Account>
    ) {}

    async getAccounts(): Promise<Account[]> {
        const accounts: Account[] = await this.accountDB.find()
        return accounts
    }

    async getAccountById(id: string): Promise<Account> {
        const account = await this.accountDB.findOne({
            where: {id},
            relations: ["onwner_"]
        })
        if (!account) {
            throw new Error("Account not found")
        }
        return account
    }

    async saveAccount(account: Partial<Account>, owner: BusinessOwner) {
        account.onwner_ = owner
        await this.accountDB.save(account)
    }
}