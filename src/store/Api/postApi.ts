import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IPost {
    // status: number;
    // message: [
    //   {
        main_text: string;
        user_id:number;
        id: number;
        reg_date: string;
        user_fk: {
          name: string;
          user_city: string;
          reg_date: string;
          email:string;
          id: number;
          phone_number: string;
          password: string;
        };
        photos: string[];
        comments: string[];
      }
 interface IGetPostByIdResponse{
  status: number;
  message: IPost
 }
  interface IGetPostResponse{
    status: number;
    message: IPost[];
  }
  interface IAddNewPostPayload{
    user_id: number;
    main_text: string;
  }
  interface IAddNewPostResponse{
    status:number;
    post_id:number;
  }

export const postApi = createApi ({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl:baseUrl,}),
    endpoints: (builder) => ({
        getPostList: builder.query<IGetPostResponse,null>({
            query: () => "/post",
        }),
        getPostById: builder.query<IGetPostByIdResponse,string>({
          query: (postId:string) => `/post?post_id=${postId}`,
      }),
      addNewPost: builder.mutation<IAddNewPostResponse,IAddNewPostPayload>({
        query: (payload) => ({
          url:"/post",
          method:"Post",
          body:payload,   
      })

      })
    }),
    });
    export const { useGetPostListQuery, useLazyGetPostByIdQuery, useAddNewPostMutation, useLazyGetPostListQuery }= postApi  
