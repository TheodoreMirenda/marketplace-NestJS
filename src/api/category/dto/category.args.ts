import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class CategoryArgs {
  @Field(() => CategoryWhereUniqueInput)
  where: CategoryWhereUniqueInput;
}
