import { Injectable } from '@nestjs/common';
import { Order, OrderSelect } from './model';
import { OrderArgs, OrderCreateInput } from './dto';
import { PrismaService } from 'src/shared/datasource/prisma/prisma.service';
import { IAuthUser } from 'src/shared/auth/model';

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
    user : IAuthUser,
  ): Promise<Order> {
    return this.prismaService.order.create({
      data:{
        ...data,
        user:{
          connect:{
            email:user.email
          }
        }
      },
      select,
    });
  }
}
