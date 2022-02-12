import { gql } from '@apollo/client';

const SIGN_IN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    signin(input: { email: $email, password: $password }) {
      accessToken
      me {
        avatarUrl
        confirmedAt
        email
        firstName
        id
        lastName
      }
      refreshToken
    }
  }
`;

export default async function signIn(client, params) {
  const {
    data: { signin },
  } = await client.mutate({ mutation: SIGN_IN_MUTATION, variables: params });
  return signin;
}
