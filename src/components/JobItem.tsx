import React from "react";
import styled from "@emotion/styled";
import { fetchSelectedJob } from "../features/jobs/jobsSlice";
import { useDispatch } from "react-redux";

export interface Props {
  jobId: string;
  jobTitle: string;
  jobLocation: string;
}

const JobItemComponent = (props: Props) => {
  const dispatch = useDispatch();
  const selectedJobHandler = (jobId: string) => {
    dispatch(fetchSelectedJob(jobId));
  };
  return (
    <ContainerStyled
      onClick={() => {
        selectedJobHandler(props.jobId);
      }}
    >
      <JobTitle>{props.jobTitle}</JobTitle>
      <JobLocation>{props.jobLocation}</JobLocation>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  && {
    display: flex;
    flex-direction: column;
    width: 100%;
    :hover {
      color: var(--highlight-color);
      cursor: hand;
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;

const JobTitle = styled.div`
  && {
    color: var(--primary-color);
    font-weight: 600;
    text-align: start;
    width: 100%;
    :hover {
      color: var(--highlight-color);
      cursor: hand;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const JobLocation = styled.div`
  && {
    color: var(--secondary-color);
    text-align: start;
    width: 100%;
  }
`;

export default JobItemComponent;
