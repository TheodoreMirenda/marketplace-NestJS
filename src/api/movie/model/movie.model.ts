import { Field, ObjectType } from '@nestjs/graphql';
import { Genre } from 'src/api/genre/model';

@ObjectType()
export class Movie {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Number, { nullable: true })
  genreId?: number;

  @Field(() => Genre, { nullable: true })
  genre?: Genre;
}
