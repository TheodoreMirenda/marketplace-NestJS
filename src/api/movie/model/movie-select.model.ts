interface MoviePrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  description?: boolean;
  images?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface MovieSelect {
  select?: MoviePrismaSelect;
}
