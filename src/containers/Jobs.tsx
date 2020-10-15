import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";
import Department from "../components/DepartmentItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentJobs } from "../features/jobs/jobsSlice";
import { RootState } from "../redux/store";

import Header from "../components/Header";

import SearchBarComponent from "../components/SearchBar";

const JobsContainer = () => {
  const dispatch = useDispatch();

  let jobs = useSelector((state: RootState) => state.jobsSlice.jobs);

  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    async function fetchData() {
      await Promise.all([dispatch(fetchCurrentJobs())]);
    }
    fetchData();
  }, [dispatch]);

  jobs = jobs
    .map((job: any) => {
      return {
        ...job,
        jobs: job.jobs.filter((job: any) => {
          return job.title.toLowerCase().includes(searchString.toLowerCase());
        }),
      };
    })
    .filter((job: any) => {
      return job.jobs.length > 0;
    })
    .sort((a: any, b: any) => {
      if (a.jobs.length > b.jobs.length) {
        return 1;
      }
      if (a.jobs.length < b.jobs.length) {
        return -1;
      }
      return 0;
    });

  return (
    <>
      <Header />

      <SearchBarComponent setSearchString={setSearchString} />
      <ContainerStyled container>
        {jobs.length > 0 ? (
          jobs.map((job: any) => {
            return (
              <Department
                key={job.departmentId}
                departmentId={job.departmentId}
                departmentName={job.departmentName}
                jobs={job.jobs}
              />
            );
          })
        ) : (
          <p>Nothing right now</p>
        )}
      </ContainerStyled>
    </>
  );
};

const ContainerStyled = styled(Grid)`
  && {
    width: 50%;
    justify-content: center;
    p {
      padding-top: 20px;
      color: var(--secondary-color);
    }
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;
export default JobsContainer;
