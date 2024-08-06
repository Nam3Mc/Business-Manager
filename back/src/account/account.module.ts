import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { AccountRepository } from './account.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account])
  ],
  providers: [AccountService, AccountRepository],
  controllers: [AccountController],
  exports: [AccountRepository]
})
export class AccountModule {}
