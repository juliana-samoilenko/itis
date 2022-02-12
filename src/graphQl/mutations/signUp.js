import { gql } from '@apollo/client';

const SIGN_UP_MUTATION = gql`
  mutation signUp($password: String!, $email: String!, $firstName: String, $lastName: String) {
    signup(input: { password: $password, email: $email, firstName: $firstName, lastName: $lastName }) {
      accessToken
      me {
        avatarUrl
        email
        firstName
        id
        lastName
      }
      refreshToken
    }
  }
`;

export async function signUp(client, params) {
  return client.mutate({ mutation: SIGN_UP_MUTATION, variables: params });
}
