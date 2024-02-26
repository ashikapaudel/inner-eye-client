
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "src/config/base_url";

const initialState = {
  isServiceListLoading: false,
  serviceList: [],
  serviceListError: null,
  isRegistrationLoading: false,
  isGalleryListLoading: false,
  galleryList: [],
  galleryListError: null,
};

// Fetch Service List
export const fetchServiceList = createAsyncThunk(
  "home/fetchServiceList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/service`);
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "Could not fetch Service list";
      return rejectWithValue(errorMessage);
    }
  }
);

// Add Registration
export const addRegistration = createAsyncThunk(
  "home/addRegistration",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/registration`, data);
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "Failed to register";
      return rejectWithValue(errorMessage);
    }
  }
);

// Fetch Gallery List
export const fetchGalleryList = createAsyncThunk(
  "home/fetchGalleryList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/gallery`);
      if (response?.status === 200) {
        return response?.data?.data;
      }
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "Could not fetch Gallery list";
      return rejectWithValue(errorMessage);
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceList.pending, (state) => {
        state.isServiceListLoading = true;
      })
      .addCase(fetchServiceList.fulfilled, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceList = action?.payload;
      })
      .addCase(fetchServiceList.rejected, (state, action) => {
        state.isServiceListLoading = false;
        state.serviceListError = action?.payload;
      })
      .addCase(addRegistration.pending, (state) => {
        state.isRegistrationLoading = true;
      })
      .addCase(addRegistration.fulfilled, (state) => {
        state.isRegistrationLoading = false;
      })
      .addCase(addRegistration.rejected, (state) => {
        state.isRegistrationLoading = false;
      })
      .addCase(fetchGalleryList.pending, (state) => {
        state.isGalleryListLoading = true;
      })
      .addCase(fetchGalleryList.fulfilled, (state, action) => {
        state.isGalleryListLoading = false;
        state.galleryList = action?.payload;
      })
      .addCase(fetchGalleryList.rejected, (state, action) => {
        state.isGalleryListLoading = false;
        state.galleryListError = action?.payload;
      });
  },
});

// Export action creators
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;

