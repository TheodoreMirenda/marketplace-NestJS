interface ProductPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  description?: boolean;
  images?: boolean;
  price?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  categoryId?: boolean;
  vendorProductId?: boolean;
  category?: boolean;
  vendorProduct?: boolean;
  ProductOrder?: boolean;
}

export interface ProductSelect {
  select?: ProductPrismaSelect;
}
