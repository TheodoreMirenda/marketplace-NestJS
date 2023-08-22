import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProductOrder, ProductOrderSelect } from './model';
import { ProductOrderArgs, ProductOrderCreateInput } from './dto';
import { ProductOrderService } from './product-order.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

@Resolver(() => ProductOrder)
export class ProductOrderResolver {
  constructor(private readonly userService: ProductOrderService) {}

  @Query(() => ProductOrder,{nullable:true})
  public async productOrder(
    @Args() args: ProductOrderArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductOrderSelect>,
  ): Promise<ProductOrder | null> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => ProductOrder)
  public async createProductOrder(
    @Args('data') data: ProductOrderCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ProductOrderSelect>,
  ): Promise<ProductOrder> {
    return this.userService.create(data, fields);
  }
}
