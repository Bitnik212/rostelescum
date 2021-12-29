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

export interface CREATE_ORDER_PROPS {
    city: string,
    street: string,
    home: string,
    apartment: number,
    phone: string,
    name: string,
    tariffId: number
}

export const CREATE_ORDER = gql`
mutation CreateOrder(
    $city: String!,
    $street: String!,
    $home: String!,
    $apartment: Int!,
    $phone: String!,
    $name: String!,
    $tariffId: ID!
  ) {
    createOrder(
      city: $city,
      street: $street,
      home: $home,
      appart: $apartment,
      phone: $phone,
      name: $name,
      tariffId: $tariffId
    ) {
      order {
        title,
        status,
        done,
        street,
        city,
        id,
        appart,
        phone {
          id,
          phone
        }
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
