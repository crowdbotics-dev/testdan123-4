import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const newconnector_get_testget_read = createAsyncThunk(
  "newconnector_response_get_testgets/newconnector_get_testget_read",
  async payload => {
    const response = await apiService.newconnector_get_testget_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newconnector_response_get_testgetsSlice = createSlice({
  name: "newconnector_response_get_testgets",
  initialState,
  reducers: {},
  extraReducers: {
    [newconnector_get_testget_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [newconnector_get_testget_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [newconnector_get_testget_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  newconnector_get_testget_read,
  slice: newconnector_response_get_testgetsSlice
}
