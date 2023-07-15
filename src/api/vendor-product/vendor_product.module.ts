import { Module } from '@nestjs/common';
import { VendorProductResolver } from './vendor_product.resolver';

import { VendorProductService } from './vendor_product.service';

@Module({
  imports: [],
  providers: [VendorProductResolver, VendorProductService],
  exports: [VendorProductResolver, VendorProductService],
})
export class VendorProductModule {}
