import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Order, OrderSelect } from './model';

import { OrderArgs, OrderCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: OrderArgs,
    { select }: OrderSelect,
  ): Promise<Order> {
    return this.prismaService.order.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: OrderCreateInput,
    { select }: OrderSelect,
  ): Promise<Order> {
    return this.prismaService.order.create({
      data: {
        ...data,
        uuid: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      select,
    });
  }
}
