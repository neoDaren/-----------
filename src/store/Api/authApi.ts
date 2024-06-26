import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl} from '../../utils/baseUrl';

interface IRegistrationUserPayload {
    email:string,
    password:string,
    name:string,
    phone_number:string,
    user_city:string,
    user_id?: number;
}

interface IRegistrationUserResponse {

    user_id?:number;
    email:string,
    password:string,
    name:string,
    phone_number:string,
    user_city:string,
}

interface ILoginUserResponse extends  IRegistrationUserResponse{}
interface ILoginUserPayload {
email:string,
password:string,

}

interface IGetUserResponse{
    status: number;
    message:{
    mail:string,
    user_id:string,
    name:string,
    phone_number:string,
    city:string,
    reg_date: string;

    }
}
export const authApi = createApi({
  reducerPath: 'authApi', 
  baseQuery: fetchBaseQuery({ baseUrl:baseUrl,}),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegistrationUserPayload,IRegistrationUserResponse>({
      query: (payload) =>({
        url:"registration",
        method:"POST",
        body:payload,
      }),
    }),
    loginUser: builder.mutation<ILoginUserResponse,ILoginUserPayload>({
        query:(payload)=>({
            url:"login",
            method:"POST",
            body:payload,
        }),
    }),
    getUser: builder.query<IGetUserResponse, string>({
        query: (userId) => `/user?user_id=${userId}`,
    }),
  }),
})
  export const { useGetUserQuery,useLoginUserMutation, useRegisterUserMutation }=authApi  