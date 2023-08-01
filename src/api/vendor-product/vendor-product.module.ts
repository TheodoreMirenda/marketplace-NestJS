import { Module } from '@nestjs/common';
import { VendorProductResolver } from './vendor-product.resolver';

import { VendorProductService } from './vendor-product.service';

@Module({
  imports: [],
  providers: [VendorProductResolver, VendorProductService],
  exports: [VendorProductResolver, VendorProductService],
})
export class VendorProductModule {}