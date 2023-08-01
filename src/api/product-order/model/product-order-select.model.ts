interface ProductOrderPrismaSelect {
  productId?: boolean;
  orderId?: boolean;
  quantity?: boolean;
  product?: boolean;
  order?: boolean;
}

export interface ProductOrderSelect {
  select?: ProductOrderPrismaSelect;
}
