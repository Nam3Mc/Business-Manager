import { Injectable } from '@nestjs/common';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {

  constructor( private accountRepository: AccountRepository    
  ) {}

  getAccounts() {
    return this.accountRepository.getAccounts()
  }

  getAccountById(id: string) {
    return this.accountRepository.getAccountById(id)
  }

  // create(createAccountDto: CreateAccountDto) {
    // return 'This action adds a new account';
  // }
// 
  // update(id: number, updateAccountDto: UpdateAccountDto) {
    // return `This action updates a #${id} account`;
  // }
// 
  // remove(id: number) {
    // return `This action removes a #${id} account`;
  // }
}
