import { Field, InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateInput {

  @Field(() => String)
  name: string;
}

@InputType()
export class CategoryCreateNestedOneWithoutVendorProductsInput {
  @Field(() => CategoryWhereUniqueInput)
  connect: CategoryWhereUniqueInput;
}

@InputType()
export class CategoryCreateNestedOneWithoutProductsInput {
  @Field(() => CategoryWhereUniqueInput)
  connect: CategoryWhereUniqueInput;
}