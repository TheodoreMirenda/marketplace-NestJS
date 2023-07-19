import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Order, OrderSelect } from './model';

import { OrderArgs, OrderCreateInput } from './dto';

import { OrderService } from './order.service';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => Order,{nullable:true})
  public async Order(
    @Args() args: OrderArgs,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
  ): Promise<Order | null> {
    return this.orderService.findOne(args, fields);
  }

  @Mutation(() => Order)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  public async createOrder(
    @Args('data') data: OrderCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
  ): Promise<Order> {
    return this.orderService.create(data, fields);
  }
}
