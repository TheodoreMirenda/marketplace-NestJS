interface OrderPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  userId?: boolean;

  orderStatus?: boolean;
  user?: boolean;
  productIds?: boolean;
  
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface OrderSelect {
  select?: OrderPrismaSelect;
}
