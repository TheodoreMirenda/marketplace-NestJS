import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
@ObjectType()
export class Vendor {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

registerEnumType(Role, {
  name: 'Role',
});
