// src/types.ts (or wherever you prefer)
export interface ProductImage {
    fields: {
      file: {
        url: string;
      };
    };
  }
  
  export interface ProductFields {
    featuredProductImage: ProductImage;
    name: string;
    price: number | string; // Adjust as needed
    description: string;
  }
  
  export interface Product {
    sys: {
      id: string;
    };
    fields: ProductFields;
  }
  
  export interface ProductListData {
    data: Product[];
  }
  