import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessOwnerService } from './businessOwner.service';
import { AccountDto } from 'src/account/dto/account.dto';
import { OwnerDto } from './dto/owner.dto';

@Controller('owners')
export class BusinessOwnerController {

  constructor(private readonly businessOwnerService: BusinessOwnerService

  ) {}

  @Get()
  getOwners() {
    return this.businessOwnerService.getOwners();
  }

  @Get(':id')
  getOwnerById(@Param('id') id: string) {
    return this.businessOwnerService.getOwnerById(id);
  }

  @Post()
  create(@Body() data: {ownerDto: OwnerDto, accountDto: AccountDto}) {
    return this.businessOwnerService.createOwner(data.ownerDto, data.accountDto);
  }
  
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    // return this.personService.update(+id, updatePersonDto);
  // }
// 
  // @Delete(':id')
  // remove(@Param('id') id: string) {
    // return this.personService.remove(+id);
  // }
}
