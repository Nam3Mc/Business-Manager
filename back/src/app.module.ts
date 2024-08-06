import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrm from "./config/typeorm"
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { ItemsModule } from './items/items.module';
import { QuantityModule } from './quantity/quantity.module';
import { BusinessOwnerModule } from './businessOwner/businessOwner.module';
import { RecipesModule } from './recipes/recipes.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ typeOrm ]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => (
        configService.get("typeorm")
      )
    }),
    BusinessOwnerModule,
    AccountModule,
    ProductModule,
    RecipesModule,
    ItemsModule,
    QuantityModule,
    ClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
