import { Field, ObjectType } from '@nestjs/graphql';
import { Movie } from 'src/api/movie/model';

@ObjectType()
export class Genre {
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

  @Field(() => [Movie], { nullable: true })
  movies?: Movie[];
}
