'use client';
import { ApolloProvider, gql } from '@apollo/client';
import useStore from './store/useStore';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import client from '../app/lib/apolloClient';
import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import './globals.css';  
import LandingPage from './home/page';

const HomePage: React.FC = () => {
  const { page, setPage } = useStore(); // Ensure setPage is included
  const [data, setData] = useState<any[]>([]);
  const productsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient({
        space: 'sq0njrjano6y',
        accessToken: 'oqp1AadL0wjbRlA5kISoAuoNz3b2M87CAzUhFj3X3QU',
      });

      const res = await client.getEntries({ content_type: 'pageProduct', limit: 100 }); // Fetch more entries
      setData(res.items);
      console.log(data,"DATA")
    };

    fetchData();
  }, []);

  const totalProducts = data.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  // Calculate the current products to display based on the current page
  const startIndex = (page - 1) * productsPerPage;
  const currentProducts = data.slice(startIndex, startIndex + productsPerPage);

  return (
    <ApolloProvider client={client}>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">E-Commerce Products</h1>
        <LandingPage/>
        <ProductList data={currentProducts} />
        <Pagination 
          totalPages={totalPages} 
          currentPage={page} 
          onPageChange={setPage} // Pass the setPage function
        />
      </main>
    </ApolloProvider>
  );
};

export default HomePage;



// 'use client';
// import { ApolloProvider, useQuery } from '@apollo/client';
// import useStore from './store/useStore';
// import ProductList from './components/ProductList';
// import Pagination from './components/Pagination';
// import client from '../app/lib/apolloClient';
// import { useEffect } from 'react';
// import { gql } from '@apollo/client';
// import './globals.css';  

// // const GET_PRODUCTS = gql`

// const HomePage: React.FC = () => {
//   const { page, setPage } = useStore();
//   const productsPerPage = 6;

//   // Calculate skip value based on the current page
//   const skip = (page - 1) * productsPerPage;

//   // Use Apollo's useQuery hook to fetch data
//   const { loading, error, data } = useQuery(gql`
//   query GetProducts($limit: Int!, $skip: Int!) {
//     pageProductCollection(limit: $limit, skip: $skip) {
//       items {
//         sys {
//           id
//         }
//         name
//         price
//         description
//         featuredProductImage {
//           url
//         }
//       }
//     }
//   }
// `, {
//   variables: { limit: productsPerPage, skip: 0 },
//   fetchPolicy: "cache-first",
// });


//   console.log(data,"DATA")

//   // Calculate total pages if data is available
//   const totalProducts = data?.productCollection?.total || 0;
//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   useEffect(() => {
//     // Clear the store when the component mounts
//     client.clearStore();
    
//     // Optionally, you could also clear it on unmount
//     return () => {
//       client.clearStore();
//     };
//   }, [client]);

//   return (
//     <ApolloProvider client={client}>
//       <main className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">E-Commerce Products</h1>
//         <ProductList data={data.productCollection.items} />
//         <Pagination 
//           totalPages={totalPages} 
//           currentPage={page} 
//           onPageChange={setPage} 
//         />
//       </main>
//     </ApolloProvider>
//   );
// };

// export default HomePage;

// function Query($limit: any, arg1: any, $skip: any, arg3: any) {
//   throw new Error('Function not implemented.');
// }

