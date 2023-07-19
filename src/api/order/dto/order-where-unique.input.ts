import { InputType, Field } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';
import { number } from 'joi';

@InputType()
export class OrderWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid: string;

  @Field(() => number, { nullable: true })
  id: number;
  
}
// id?: number
// uuid?: string
// AND?: OrderWhereInput | OrderWhereInput[]
// OR?: OrderWhereInput[]
// NOT?: OrderWhereInput | OrderWhereInput[]
// userId?: IntFilter<"Order"> | number
// createdAt?: DateTimeFilter<"Order"> | Date | string
// updatedAt?: DateTimeFilter<"Order"> | Date | string
// orderStatus?: EnumOrderStatusFilter<"Order"> | OrderStatus
// user?: XOR<UserRelationFilter, UserWhereInput>
// productOrders?: ProductOrderListRelationFilter
