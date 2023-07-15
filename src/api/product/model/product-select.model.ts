interface ProductPrismaSelect {
  id?: boolean;
  uuid?: boolean;

  name?: boolean;
  description?: boolean;
  iamges?: boolean;
  price?: boolean;
  
  createdAt?: boolean;
  updatedAt?: boolean;

  categoryId?: boolean;
  category?: boolean;

  vendorProductId?: boolean;
  vendorProduct?: boolean;

  orders?: boolean;
}

export interface ProductSelect {
  select?: ProductPrismaSelect;
}
