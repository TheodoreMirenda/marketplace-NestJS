import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, Order } from '@prisma/client';

@ObjectType()
export class Category {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  orders?: Order[];
}

registerEnumType(Role, {
  name: 'Role',
});
