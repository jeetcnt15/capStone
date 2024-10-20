'use client';
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import useStore from '../store/useStore';
import { createClient } from 'contentful';

const GET_PRODUCTS = gql`
    query GetProducts($limit: Int!, $skip: Int!) {
      pageProductCollection(limit: $limit, skip: $skip) {
        items {
          sys {
            id
          }
          name
          price
          description
          featuredProductImage {
            url
          }
        }
      }
    }
`;

const ProductList = ({data}) => {
  const { page, setProducts } = useStore();
  const productsPerPage = 10; 
  const skip = (page - 1) * productsPerPage;
  console.log(data)
  
  // const { loading, error, data } = useQuery(GET_PRODUCTS, {
  //   variables: { skip, limit: productsPerPage },
  // });

  // useEffect(() => {
  //   if (data) {
  //     setProducts(data);
  //   }
  // }, [data, setProducts]);

  // if (loading) return <p>Loading...</p>;
  // if (error) {
  //   console.error("GraphQL Error:", error);
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-xl font-semibold mb-4">Product List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((product) => (
        <div key={product.sys.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={product.fields.featuredProductImage.fields.file.url} 
            alt={product.fields.name} 
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{product.fields.name}</h3>
            <p className="text-xl text-green-600 mb-4">${product.fields.price}</p>
            <p className="text-gray-700 mb-4">{product.fields.description}</p> 
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductList;
