import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Order, OrderSelect } from './model';
import { OrderArgs, OrderCreateInput } from './dto';
import { OrderService } from './order.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => Order,{nullable:true})
  public async Order(
    @Args() args: OrderArgs,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
  ): Promise<Order | null> {
    return this.orderService.findOne(args, fields);
  }

  @Mutation(() => Order)
  public async createOrder(
    @Args('data') data: OrderCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<OrderSelect>,
  ): Promise<Order> {
    return this.orderService.create(data, fields);
  }
}
