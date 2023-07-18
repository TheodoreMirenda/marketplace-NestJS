interface CategoryPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;

  products?: boolean;
  vendorProducts?: boolean;
}

export interface CategorySelect {
  select?: CategoryPrismaSelect;
}
