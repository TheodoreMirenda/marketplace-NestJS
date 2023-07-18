import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/shared/config/config.module';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './shared/datasource/prisma/prisma.module';
import { AuthModule } from './shared/auth/auth.module';
// import { CategoryModule } from './api/category/category.module';
import { VendorModule } from './api/vendor/vendor.module';
// import { ProductModule } from './api/product/product.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule,
    AuthModule,
    UserModule,
    // CategoryModule,
    VendorModule,
    // ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
