import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { VendorProduct, VendorProductSelect } from './model';

import { VendorProductArgs, VendorProductCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class VendorProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: VendorProductArgs,
    { select }: VendorProductSelect,
  ): Promise<VendorProduct> {
    return this.prismaService.vendor.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: VendorProductCreateInput,
    { select }: VendorProductSelect,
  ): Promise<VendorProduct> {
    return this.prismaService.vendor.create({
      data:{
        ...data,
        uuid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'VENDOR',
        vendor_products: {
        }
      },
      select,
    });
  }
}
