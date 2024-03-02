import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Using Rtk query to fetch data
export const Api = createApi({
  // base Url
  baseQuery: fetchBaseQuery({
    baseUrl: "https://interview-backend-gq8s.onrender.com/api/v1/",
  }),
  reducerPath: "api",

  endpoints: (build) => ({
    // Compnent 1 Endpoints
    getcomponent1Data: build.query({
      query: () => `component1`,
      providesTags: ["component1"],
    }),
    createComponent1Data: build.mutation({
      query: (data) => ({
        url: "component1/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["component1"],
    }),
    updateComponent1Data: build.mutation({
      query: ({ id, data }) => ({
        url: `component1/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["component1"],
    }),

    // Compnent 2 Endpoints

    getcomponent2Data: build.query({
      query: () => `component2`,
      providesTags: ["component2"],
    }),
    createComponent2Data: build.mutation({
      query: (data) => ({
        url: "component2/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["component2"],
    }),
    updateComponent2Data: build.mutation({
      query: ({ id, data }) => ({
        url: `component2/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["component2"],
    }),

    // Compnent 3 Endpoints

    getcomponent3Data: build.query({
      query: () => `component3`,
      providesTags: ["component3"],
    }),
    createComponent3Data: build.mutation({
      query: (data) => ({
        url: "component3/new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["component3"],
    }),
    updateComponent3Data: build.mutation({
      query: ({ id, data }) => ({
        url: `component3/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["component3"],
    }),
    // For Api hit Counts
    getcomponent1Counts: build.query({
      query: () => `hitcounts`,
      providesTags: ["component1"],
    }),
    getcomponent2Counts: build.query({
      query: () => `hitcounts2`,
      providesTags: ["component2"],
    }),
    getcomponent3Counts: build.query({
      query: () => `hitcounts3`,
      providesTags: ["component3"],
    }),
  }),
});

export const {
  useGetcomponent1DataQuery,
  useCreateComponent1DataMutation,
  useUpdateComponent1DataMutation,

  useGetcomponent2DataQuery,
  useCreateComponent2DataMutation,
  useUpdateComponent2DataMutation,

  useGetcomponent3DataQuery,
  useCreateComponent3DataMutation,
  useUpdateComponent3DataMutation,

  useGetcomponent1CountsQuery,
  useGetcomponent2CountsQuery,
  useGetcomponent3CountsQuery,
} = Api;
