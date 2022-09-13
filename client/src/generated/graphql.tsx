import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  country: Country;
  state?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  getZipCodeDetails?: Maybe<ZipCode>;
};


export type QueryGetZipCodeDetailsArgs = {
  countryCode: Scalars['String'];
  zipcode: Scalars['String'];
};

export type ZipCode = {
  __typename?: 'ZipCode';
  code: Scalars['String'];
  location?: Maybe<Location>;
};

export type LookupZipCodeQueryVariables = Exact<{
  countryCode: Scalars['String'];
  zipCode: Scalars['String'];
}>;


export type LookupZipCodeQuery = { __typename?: 'Query', getZipCodeDetails?: { __typename?: 'ZipCode', code: string, location?: { __typename?: 'Location', city?: string | null, state?: string | null, country: { __typename?: 'Country', code: string, name: string } } | null } | null };


export const LookupZipCodeDocument = gql`
    query LookupZipCode($countryCode: String!, $zipCode: String!) {
  getZipCodeDetails(countryCode: $countryCode, zipcode: $zipCode) {
    code
    location {
      country {
        code
        name
      }
      city
      state
    }
  }
}
    `;

/**
 * __useLookupZipCodeQuery__
 *
 * To run a query within a React component, call `useLookupZipCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useLookupZipCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLookupZipCodeQuery({
 *   variables: {
 *      countryCode: // value for 'countryCode'
 *      zipCode: // value for 'zipCode'
 *   },
 * });
 */
export function useLookupZipCodeQuery(baseOptions: Apollo.QueryHookOptions<LookupZipCodeQuery, LookupZipCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LookupZipCodeQuery, LookupZipCodeQueryVariables>(LookupZipCodeDocument, options);
      }
export function useLookupZipCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LookupZipCodeQuery, LookupZipCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LookupZipCodeQuery, LookupZipCodeQueryVariables>(LookupZipCodeDocument, options);
        }
export type LookupZipCodeQueryHookResult = ReturnType<typeof useLookupZipCodeQuery>;
export type LookupZipCodeLazyQueryHookResult = ReturnType<typeof useLookupZipCodeLazyQuery>;
export type LookupZipCodeQueryResult = Apollo.QueryResult<LookupZipCodeQuery, LookupZipCodeQueryVariables>;