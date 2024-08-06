import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { ItemsRepository } from './items.repository';

@Module({ 
  imports: [
    TypeOrmModule.forFeature([Item])
],
providers: [ItemsService, ItemsRepository],
  controllers: [ItemsController],
  exports: [ItemsRepository]
})
export class ItemsModule {}
