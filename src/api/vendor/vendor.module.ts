import { Module } from '@nestjs/common';
import { VendorResolver } from './vendor.resolver';

import { VendorService } from './vendor.service';

@Module({
  imports: [],
  providers: [VendorResolver, VendorService],
  exports: [VendorResolver, VendorService],
})
export class VendorModule {}
