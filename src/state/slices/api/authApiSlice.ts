import { apiSlice } from "../apiSlice";

type LoginBody = {
  email: string;
  password: string;
};

type LoginResponse = {
  idToken: string;
  accessToken: string;
  refreshToken: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body: LoginBody) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
