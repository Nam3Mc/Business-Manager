import { Injectable } from '@nestjs/common';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { RecipesRepository } from './recipes.repository';

@Injectable()
export class RecipesService {

  constructor( 
    private recipesRepository: RecipesRepository
  ) {}

  newRecipe(items: [{id: string, quantity: number}]) {
    return this.recipesRepository.createRecipe(items)
  }

  findAll() {
    return `This action returns all recipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
