import { Injectable } from '@nestjs/common';
import { BusinessOwnerRepository } from './businessOwner.repository';
import { BusinessOwner } from './entities/businessOwner.entity';
import { OwnerDto } from './dto/owner.dto';
import { AccountDto } from 'src/account/dto/account.dto';

@Injectable()
export class BusinessOwnerService {

  constructor( 
    private businessOwnerRepository: BusinessOwnerRepository
  ) {}

  async getOwners(): Promise<BusinessOwner[]> {
    return this.businessOwnerRepository
    .getOwners()
  }

  getOwnerById(id: string) {
    return this.businessOwnerRepository.getOwnerById(id)
  }

  createOwner(ownerDto: OwnerDto, accountDto: AccountDto) {
    return this.businessOwnerRepository.createOwner(ownerDto, accountDto)
  }

  // update(id: number, updatePersonDto: UpdatePersonDto) {
    // return `This action updates a #${id} person`;
  // }
// 
  // remove(id: number) {
    // return `This action removes a #${id} person`;
  // }
}
