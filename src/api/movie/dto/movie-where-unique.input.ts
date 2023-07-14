import { InputType, Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class MovieWhereUniqueInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  uuid?: string;
}
