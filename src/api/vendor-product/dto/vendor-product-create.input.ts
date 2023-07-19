import { Field, InputType } from '@nestjs/graphql';

import { CategoryCreateNestedOneWithoutVendorProductsInput } from 'src/api/category/dto';
import { VendorCreateNestedOneWithoutVendorProductsInput } from 'src/api/vendor/dto';
import { ProductCreateNestedOneWithoutVendorProductInput } from 'src/api/product/dto';
import { VendorProductWhereUniqueInput } from './vendor-product-where-unique.input';

@InputType()
export class VendorProductCreateInput {
  @Field(() => String)
  name: string;
  @Field(() => Number)
  quantity: number;
  @Field(() => CategoryCreateNestedOneWithoutVendorProductsInput)
  category: CategoryCreateNestedOneWithoutVendorProductsInput

  @Field(() => VendorCreateNestedOneWithoutVendorProductsInput)
  vendor: VendorCreateNestedOneWithoutVendorProductsInput
}

@InputType()
export class VendorProductCreateNestedOneWithoutProductInput {
  @Field(() => VendorProductWhereUniqueInput)
  connect: VendorProductWhereUniqueInput;
}