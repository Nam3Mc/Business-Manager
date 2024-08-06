import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { RecipesRepository } from './recipes.repository';
import { ItemsModule } from 'src/items/items.module';
import { ItemsRepository } from 'src/items/items.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe]),
    ItemsModule
  ],
  providers: [RecipesService, RecipesRepository],
  controllers: [RecipesController],
  exports: [],
})
export class RecipesModule {}
