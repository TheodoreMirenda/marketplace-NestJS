import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { ProductOrder, ProductOrderSelect } from './model';

import { ProductOrderArgs, ProductOrderCreateInput } from './dto';

import { ProductOrderService } from './product-order.service';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';

@Resolver(() => ProductOrder)
export class ProductOrderResolver {
  constructor(private readonly userService: ProductOrderService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => ProductOrder,{nullable:true})
  public async ProductOrder(
    @Args() args: ProductOrderArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductOrderSelect>,
  ): Promise<ProductOrder | null> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => ProductOrder)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  public async createProductOrder(
    @Args('data') data: ProductOrderCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ProductOrderSelect>,
  ): Promise<ProductOrder> {
    return this.userService.create(data, fields);
  }
}
