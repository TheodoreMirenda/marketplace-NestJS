interface CategoryPrismaSelect {
  id?: boolean;
  uuid?: boolean;

  name?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  products?: boolean;
  vendorProducts?: boolean;
}

export interface CategorySelect {
  select?: CategoryPrismaSelect;
}
