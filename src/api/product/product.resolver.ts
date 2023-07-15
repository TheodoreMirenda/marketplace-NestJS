import { Role } from '@prisma/client';

import { UseGuards } from '@nestjs/common';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Product, ProductSelect } from './model';

import { ProductArgs, ProductCreateInput } from './dto';

import { ProductService } from './product.service';

import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';

import { Roles } from 'src/shared/decorators/roles';

import { RolesGuard, JwtAuthGuard } from 'src/shared/auth/guards';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly userService: ProductService) {}

  // @UseGuards(JwtAuthGuard)
  @Query(() => Product,{nullable:true})
  public async Product(
    @Args() args: ProductArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product | null> {
    return this.userService.findOne(args, fields);
  }

  @Mutation(() => Product)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  public async createProduct(
    @Args('data') data: ProductCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product> {
    return this.userService.create(data, fields);
  }
}
