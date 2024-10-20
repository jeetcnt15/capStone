// src/types.ts
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
  
  // Define the expected structure for ProductListData
  export interface PageProductCollection {
    items: Product[]; // Products collection
  }
  
  export interface ProductListData {
    pageProductCollection: PageProductCollection; // Contains items array of products
  }
  