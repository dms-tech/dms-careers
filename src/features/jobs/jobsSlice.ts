import { createSlice } from "@reduxjs/toolkit";
import { getJobs, getSelectedJob } from "../../api/Greenhouse";

import { AppThunk } from "../../redux/store";

export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  questions: any[];
}
const jobs = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: {} as Job,
  },
  reducers: {
    setCurrentJobs: (state, action) => {
      state.jobs = action.payload;
    },
    setSelectedJob: (state, action) => {
      state.selectedJob = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.content,
        location: action.payload.location.name,
        questions: action.payload.questions,
      };
    },
    clearJobSelection: (state) => {
      state.selectedJob = {} as Job;
    },
  },
});

export const fetchCurrentJobs = (): AppThunk => async (dispatch) => {
  const jobs = await getJobs();
  dispatch(setCurrentJobs(jobs));
};

export const fetchSelectedJob = (selectedJobId: string): AppThunk => async (
  dispatch
) => {
  const job = await getSelectedJob(selectedJobId);
  dispatch(setSelectedJob(job));
};

export const {
  setCurrentJobs,
  setSelectedJob,
  clearJobSelection,
} = jobs.actions;

export default jobs.reducer;
