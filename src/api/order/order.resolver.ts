import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { Order, OrderSelect } from './model';
import { OrderArgs, OrderCreateInput } from './dto';
import { OrderService } from './order.service';
import { GraphQLFields, IGraphQLFields } from 'src/shared/decorators'
import { JwtAuthGuard, RolesGuard } from 'src/shared/auth/guards';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles';
import { Role } from '@prisma/client';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => Order,{nullable:true})
  public async order(
    @Args() args: OrderArgs,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
  ): Promise<Order | null> {
    return this.orderService.findOne(args, fields);
  }

  @Mutation(() => Order)
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  public async createOrder(
    @Args('data') data: OrderCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
    @Context() context,
  ): Promise<Order> {
    return this.orderService.create(data, fields, context.req.user);
  }
}
