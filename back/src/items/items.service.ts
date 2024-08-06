import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {

  constructor( 
    private itemsRepository: ItemsRepository
  ) {}
  findAll() {
    return this.itemsRepository.getItems()
  }
// 
  // create(createItemDto: CreateItemDto) {
    // return `This action returns all items`;
  // }
// 
  // findOne(id: number) {
    // return `This action returns a #${id} item`;
  // }
// 
  // update(id: number, updateItemDto: UpdateItemDto) {
    // return `This action updates a #${id} item`;
  // }
// 
  // remove(id: number) {
    // return `This action removes a #${id} item`;
  // }
}
