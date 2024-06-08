
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryUrl } from '../../utils/baseQueryUrl'

interface IRegisterUserPayload{
    name: string,
    email: string,
    phone_number: string,
    password: string,
    user_city: string,
}
interface IRegisterUserResponse{
    status: number;
    user_id: number;
}
interface ILoginUserResponse extends IRegisterUserResponse {}
interface ILoginUserPayload {
 
  email: string,
    password: string
}
interface IGetUserResponse {
    status: number;
    message: {
        mail: string;
        phone_number: string;
        user_id: number;
        name: string;
        reg_date: string;
        city: string;
    }
}
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseQueryUrl}),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterUserResponse, IRegisterUserPayload>({
      query: (payload)=>({
        url: 'registration',
        method: 'POST',
        body: payload,
      }),
    }),
   loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
    query: (payload)=>({
      url: 'login',
      method: 'POST',
      body: payload,
    }),
   }),
   getUser: builder.query<IGetUserResponse, string>({
    query:(userId) => `/user?user_id=${userId}`,
   })
  }),
})
export const {useGetUserQuery, useLoginUserMutation, useRegisterUserMutation}=authApi