import { ArgsType, Field } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@ArgsType()
export class OrderArgs {
  @Field(() => OrderWhereUniqueInput)
  where: OrderWhereUniqueInput;
}
