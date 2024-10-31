import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const submitEvaluation = createAsyncThunk(
  "evaluation/submit",
  async (evaluationData) => {
    const response = await api.submitEvaluation(evaluationData);
    return response.data;
  }
);

const evalSlice = createSlice({
  name: "evaluation",
  initialState: { status: "idle", evaluations: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitEvaluation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitEvaluation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.evaluations.push(action.payload);
      })
      .addCase(submitEvaluation.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default evalSlice.reducer;
