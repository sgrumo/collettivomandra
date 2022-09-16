import { apiSlice } from "../apiSlice";

type Profile = {
  name: string;
};

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<Profile, { idToken: string }>({
      query: ({ idToken }) => ({
        url: `/profile`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-id-token": idToken,
        },
      }),
      providesTags: (_result, _error, arg) => [
        { type: "TestTag", id: arg.idToken },
      ],
    }),
  }),
});

export const { useGetProfileQuery } = profileApiSlice;
