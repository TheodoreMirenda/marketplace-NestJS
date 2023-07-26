import { Injectable } from '@nestjs/common';
import { Vendor, VendorSelect } from './model';
import { VendorArgs, VendorCreateInput } from './dto';
import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class VendorService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: VendorArgs,
    { select }: VendorSelect,
  ): Promise<Vendor> {
    return this.prismaService.vendor.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: VendorCreateInput,
    { select }: VendorSelect,
  ): Promise<Vendor> {
    return this.prismaService.vendor.create({
      data,
      select,
    });
  }
}
