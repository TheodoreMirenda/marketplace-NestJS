import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { ProductOrder, ProductOrderSelect } from './model';

import { ProductOrderArgs, ProductOrderCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class ProductOrderService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where: productId_orderId }: ProductOrderArgs,
    { select }: ProductOrderSelect,
  ): Promise<ProductOrder> {
    return this.prismaService.productOrder.findUnique({
      where: {
        productId_orderId,
      },
      select,
    });
  }

  public async create(
    data: ProductOrderCreateInput,
    { select }: ProductOrderSelect,
  ): Promise<ProductOrder> {
    return this.prismaService.productOrder.create({
      data,
      select,
    });
  }
}
