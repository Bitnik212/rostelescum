import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export const GET_ALL_TARIFFS = gql`
  query {
  allTariffs {
    id,
    title,
    price,
    type {
      id,
      name
    },
    props {
      id,
      title,
      description
    }
  }
}
`;

class Controllers {
    client: ApolloClient<any>

    constructor() {
        this.client = new ApolloClient({
          uri: `${location.protocol}//${location.host}/graphql`,
          cache: new InMemoryCache()
        });
    }
}

export default new Controllers();
