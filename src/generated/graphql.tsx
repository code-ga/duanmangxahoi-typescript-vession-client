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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddRoleForUserInput = {
  role: Role;
  userId: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Scalars['String']>;
};

export type CategoryResponse = IMutationResponse & {
  __typename?: 'CategoryResponse';
  category?: Maybe<Array<Category>>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ChangePasswordInputType = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type CreatePostInput = {
  /** default is cộng đồng */
  category?: InputMaybe<Scalars['String']>;
  content: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostMutationResponse = IMutationResponse & {
  __typename?: 'CreatePostMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Post>>;
  success: Scalars['Boolean'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GetLikeInfoResponse = IMutationResponse & {
  __typename?: 'GetLikeInfoResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  like?: Maybe<Array<LikeModel>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type GetPostQueryResponse = IMutationResponse & {
  __typename?: 'GetPostQueryResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  success: Scalars['Boolean'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type LikeModel = {
  __typename?: 'LikeModel';
  ObjectId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  emoji: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  value: Scalars['Float'];
};

export type LoginInput = {
  UsernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateAlertPost: CreatePostMutationResponse;
  DeleteAlertPost: CreatePostMutationResponse;
  UpdateAlertPost: CreatePostMutationResponse;
  addRoleForUser: UserMutationResponse;
  changePasswordUser: UserMutationResponse;
  createAccountHaveRole: UserMutationResponse;
  createPost: CreatePostMutationResponse;
  deletePost: UpdatePostMutationResponse;
  getAuthorInfo: UserMutationResponse;
  getMyProfile: UserMutationResponse;
  likePost: UpdatePostMutationResponse;
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  removeRoleForUser: UserMutationResponse;
  updatePost: UpdatePostMutationResponse;
};


export type MutationCreateAlertPostArgs = {
  data: CreatePostInput;
};


export type MutationDeleteAlertPostArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAlertPostArgs = {
  data: UpdatePostInput;
  id: Scalars['String'];
};


export type MutationAddRoleForUserArgs = {
  addRoleForUserInput: AddRoleForUserInput;
};


export type MutationChangePasswordUserArgs = {
  changePasswordInput: ChangePasswordInputType;
};


export type MutationCreateAccountHaveRoleArgs = {
  RegisterInput: ResisterInput;
  role: Scalars['Float'];
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationGetAuthorInfoArgs = {
  authorId: Scalars['String'];
};


export type MutationLikePostArgs = {
  id: Scalars['String'];
  likeType: Scalars['Float'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: ResisterInput;
};


export type MutationRemoveRoleForUserArgs = {
  removeRoleForUserInput: AddRoleForUserInput;
};


export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String'];
  author: Scalars['String'];
  category: Scalars['String'];
  comments?: Maybe<Array<Scalars['String']>>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  isAlert: Scalars['Boolean'];
  keyword?: Maybe<Array<Scalars['String']>>;
  likeNumber: Scalars['Float'];
  likes: Array<Scalars['String']>;
  photo: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  GetAlertPost?: Maybe<GetPostQueryResponse>;
  GetCategory?: Maybe<CategoryResponse>;
  GetLikeInfo?: Maybe<GetLikeInfoResponse>;
  GetPostByCategory?: Maybe<GetPostQueryResponse>;
  getPostById?: Maybe<GetPostByIdResponse>;
  getPosts?: Maybe<GetPostQueryResponse>;
  getUserPost?: Maybe<GetPostQueryResponse>;
  hello: Scalars['String'];
  me: User;
};


export type QueryGetLikeInfoArgs = {
  LikeId: Scalars['String'];
};


export type QueryGetPostByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryGetPostByIdArgs = {
  id: Scalars['String'];
};

export type UpdatePostInput = {
  category?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePostMutationResponse = IMutationResponse & {
  __typename?: 'UpdatePostMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Post>>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  keywords?: Maybe<Array<Scalars['String']>>;
  likes?: Maybe<Array<Scalars['String']>>;
  postWasWatch?: Maybe<Array<Scalars['String']>>;
  posts?: Maybe<Array<Scalars['String']>>;
  role: Array<Role>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  error?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type GetPostByIdResponse = IMutationResponse & {
  __typename?: 'getPostByIdResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
  success: Scalars['Boolean'];
};

export type ResisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** the role enum */
export enum Role {
  Admin = 'admin',
  ContentAdmin = 'contentAdmin',
  SuperAdmin = 'superAdmin',
  User = 'user'
}

export type UserInfoFragment = { __typename?: 'User', _id: string, email: string, username: string, avatar: string, role: Array<Role>, likes?: Array<string> | null };

export type ErrorFieldFragment = { __typename?: 'FieldError', field: string, message: string };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, email: string, username: string, avatar: string, role: Array<Role>, likes?: Array<string> | null } | null, error?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, email: string, username: string, avatar: string, role: Array<Role>, likes?: Array<string> | null } | null, error?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RegisterMutationVariables = Exact<{
  registerInput: ResisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null, user?: { __typename?: 'User', _id: string, email: string, username: string, avatar: string, role: Array<Role>, likes?: Array<string> | null } | null, error?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', _id: string, email: string, username: string, avatar: string, role: Array<Role>, likes?: Array<string> | null } };

export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  _id
  email
  username
  avatar
  role
  likes
}
    `;
export const ErrorFieldFragmentDoc = gql`
    fragment errorField on FieldError {
  field
  message
}
    `;
export const UserMutationResponseFragmentDoc = gql`
    fragment userMutationResponse on UserMutationResponse {
  code
  success
  message
  user {
    ...userInfo
  }
  error {
    ...errorField
  }
}
    ${UserInfoFragmentDoc}
${ErrorFieldFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: resisterInput!) {
  register(registerInput: $registerInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;