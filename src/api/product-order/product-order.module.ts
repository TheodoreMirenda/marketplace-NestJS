import { Module } from '@nestjs/common';
import { ProductOrderResolver } from './product-order.resolver';

import { ProductOrderService } from './product-order.service';

@Module({
  imports: [],
  providers: [ProductOrderResolver, ProductOrderService],
  exports: [ProductOrderResolver, ProductOrderService],
})
export class ProductOrderModule {}
