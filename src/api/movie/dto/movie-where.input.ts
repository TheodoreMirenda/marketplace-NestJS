import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class MovieWhereInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id?: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  uuid?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
