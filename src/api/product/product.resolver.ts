import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Product, ProductSelect } from './model';
import { ProductArgs, ProductCreateInput, ProductsArgs } from './dto';
import { ProductService } from './product.service';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { JwtAuthGuard } from 'src/shared/auth/guards';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => Product,{nullable:true})
  public async product(
    @Args() args: ProductArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product | null> {
    return this.productService.findOne(args, fields);
  }

  @Query(() => [Product])
  public async products(
    @Args() args: ProductsArgs,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product[]> {
    return this.productService.findMany(args, fields);
  }

  @Mutation(() => Product)
  // @UseGuards(JwtAuthGuard)
  public async createProduct(
    @Args('data') data: ProductCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<ProductSelect>,
  ): Promise<Product> {
    return this.productService.create(data, fields);
  }
}
