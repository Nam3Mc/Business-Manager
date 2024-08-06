import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAccounts() {
    return this.accountService.getAccounts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.getAccountById(id)
  }

  // @Post()
  // create(@Body() createAccountDto: CreateAccountDto) {
    // return this.accountService.create(createAccountDto);
  // }  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    // return this.accountService.update(+id, updateAccountDto);
  // }
// 
  // @Delete(':id')
  // remove(@Param('id') id: string) {
    // return this.accountService.remove(+id);
  // }
}
