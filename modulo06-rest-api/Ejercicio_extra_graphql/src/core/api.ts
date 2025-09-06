import axios from 'Axios';
const url = 'https://rickandmortyapi.com/graphql';

interface GraphqlProps<Variables> {
  query: string;
  variables?: Variables;
}

export const graphql = async <Response, Variables = unknown>(
  props: GraphqlProps<Variables>
): Promise<Response> => {
  const { query, variables } = props;
  const response = await axios.post(url, { query, variables });
  const { data } = response.data;
  return data;
};
