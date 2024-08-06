import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./entities/item.entity";
import { Repository } from "typeorm";
import { items } from "../helpers/mookItems"

@Injectable()
export class ItemsRepository{

        constructor( @InjectRepository(Item)  
        private ItemsDB: Repository<Item> 
    ) {}

    async getItems() {
        const allItems = await this.ItemsDB.find()
        if (allItems.length < 1) {
            for(const item of items) 
                await this.ItemsDB.save(item)
        }
        else {
            return allItems
        }
    }

    async getItemById(id: string): Promise<Item> {
        const item: Item = await this.ItemsDB.findOne({
            where: {id}
        })
        return item
    }

    async saveItem(item: Item) {
        this.ItemsDB.save(item)
    }
    
} 