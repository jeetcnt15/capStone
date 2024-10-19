import { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import useStore from '../store/useStore';

const GET_PRODUCTS = gql`
  query GetProducts($page: Int!) {
    products(page: $page) {
      id
      name
      price
      imageUrl
    }
  }
`;

const ProductList = () => {
  const { page, setProducts } = useStore();
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { page },
  });

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data, setProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.products.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img src={product.imageUrl} alt={product.name} />
          <h3 className="font-bold">{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
