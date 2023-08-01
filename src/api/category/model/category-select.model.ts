import { ProductSelect } from "src/api/product/model";
import { VendorProductSelect } from "src/api/vendor-product/model";

interface CategoryPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  products?: ProductSelect;
  vendorProducts?: VendorProductSelect;
}

export interface CategorySelect {
  select?: CategoryPrismaSelect;
}
