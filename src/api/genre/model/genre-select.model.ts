interface GenrePrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface GenreSelect {
  select?: GenrePrismaSelect;
}
