import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "../../utils/baseQueryUrl";
import { DateSchema } from "yup";
import { createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
interface IPost {
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
    ;
  interface IGetPostByIdResponse {
    status: number;
    message: IPost
  }
  interface IGetPostResponse {
    status: number;
    message: IPost[];
  }
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQueryUrl}),
    endpoints: (builder) => ({
        getPostList: builder.query<IGetPostResponse, null>({
            query: ()=>'/post'
        }),
        getPostById: builder.query<IGetPostByIdResponse, string>({
          query: (postId:string)=>`/post?post_id${postId}`
        }),
    })
})

export const {useGetPostListQuery, useLazyGetPostByIdQuery}=postApi



