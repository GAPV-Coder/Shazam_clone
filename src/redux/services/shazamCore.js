import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",
		prepareHeaders: headers => {
			headers.set(
				"X-RapidAPI-Key",
				"80a4036851mshf957a27b7005395p14977ejsnfbf7a8895cd6"
			);

			return headers;
		}
	}),
	endpoints: builder => ({
		getTopCharts: builder.query({ query: () => "/charts/world" })
	})
});

export const { useGetTopChartsQuery } = shazamCoreApi;
