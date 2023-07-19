interface VendorProductPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  quantity?: boolean;
  category?: boolean;
  vendor?: boolean;
  product?: boolean;
}

export interface VendorProductSelect {
  select?: VendorProductPrismaSelect;
}
