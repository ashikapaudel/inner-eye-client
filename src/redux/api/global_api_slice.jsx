import { responsiveProperty } from "@mui/material/styles/cssUtils";
import {apiSlice} from "./apiSlice";

export const globalApiSlice = apiSlice.injectEndpoints({
    endpoints: (builders)=>({
        fetchNavServicesItems: builders.query({
            query: ()=> "/contact-information",
            TransformResponse: (response)=> response?.data[0],
        }),
        addContact: builders.mutation({
            query:(ContactData) => ({
                url:"/contact-us",
                method:"POST",
                body:ContactData,
            }),
            transformResponse:(response)=> console.log("Success"),
            transformResponse:(res) => console.log("error"),
        }),
    }),
});
export const {useFetchContactCardsQuery,useAddContactMutation}=contactApiSlice;