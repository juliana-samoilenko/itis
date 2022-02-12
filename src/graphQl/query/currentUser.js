import { gql } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  {
    me {
      avatarUrl
      confirmedAt
      email
      firstName
      id
      lastName
    }
  }
`;

export function currentUser(client) {
  return client.query({ query: CURRENT_USER_QUERY });
}
