import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/sq0njrjano6y',
    headers: {
      Authorization: `Bearer oqp1AadL0wjbRlA5kISoAuoNz3b2M87CAzUhFj3X3QU`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;


// https://app.contentful.com/spaces/sq0njrjano6y/api/cli
// pageProduct
