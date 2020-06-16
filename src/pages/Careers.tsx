import React from "react";
import Jobs from "../containers/Jobs";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import JobDetails from "../containers/JobDetails";

const CareersPage = () => {
  const selectedJob = useSelector(
    (state: RootState) => state.jobsSlice.selectedJob
  );

  return (
    <ContainerStyled>
      {!selectedJob.id ? <Jobs /> : <JobDetails />}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  && {
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

export default CareersPage;
