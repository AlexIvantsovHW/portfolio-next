import { Universities } from "@/src/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";

export const universitiesApi = createApi({
  reducerPath: "universitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    getAllUniversities: build.query<Universities[], number>({
      query: (limit: number) => `/university`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useGetAllUniversitiesQuery } = universitiesApi;
