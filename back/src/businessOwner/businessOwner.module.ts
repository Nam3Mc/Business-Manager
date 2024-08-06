import { Module } from '@nestjs/common';
import { BusinessOwnerController } from './businessOwner.controller';
import { BusinessOwnerService } from './businessOwner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessOwner } from './entities/businessOwner.entity';
import { BusinessOwnerRepository } from './businessOwner.repository';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BusinessOwner]),
    AccountModule
  ],

  providers: [BusinessOwnerService, BusinessOwnerRepository],
  controllers: [BusinessOwnerController],
  exports: [],
})
export class BusinessOwnerModule{}
