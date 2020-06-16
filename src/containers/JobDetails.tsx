import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearJobSelection } from "../features/jobs/jobsSlice";
import { Grid, Button } from "@material-ui/core";

import JobDescription from "../components/JobDescription";
import ApplicationForm from "../components/ApplicationForm";

import ListAltIcon from "@material-ui/icons/ListAlt";

import useScript from "../hooks/useScript";

const JobDetailsContainer = () => {
  useScript("https://boards.greenhouse.io/embed/job_board/js?for=dms");
  const dispatch = useDispatch();

  const [apply, setApply] = useState(false);

  const selectedJob = useSelector(
    (state: RootState) => state.jobsSlice.selectedJob
  );

  const goBackHandler = () => {
    dispatch(clearJobSelection());
    setApply(false);
  };

  const cancelApplicationClickHandler = () => {
    setApply(false);
  };

  const parser = new DOMParser();
  const jobDescription = {
    __html: parser
      .parseFromString(
        "<!doctype html><body>" + selectedJob.description,
        "text/html"
      )
      .body.textContent.toString(),
  };

  const applyButtonClickHandler = () => {
    setApply(true);
  };

  return (
    <ContainerStyled>
      <GridContainerStyled container>
        <Grid item xs={12}>
          <BackButton onClick={goBackHandler}>View all jobs</BackButton>
        </Grid>
        <Grid item xs={12} md={8}>
          <JobHeader>{selectedJob.title}</JobHeader>
        </Grid>
        <Grid item xs={12} md={3}>
          {!apply ? (
            <ButtonStyled
              variant="contained"
              disableElevation={true}
              size="large"
              onClick={applyButtonClickHandler}
            >
              Apply now
            </ButtonStyled>
          ) : (
            <ButtonStyled
              variant="contained"
              disableElevation={true}
              size="large"
              onClick={cancelApplicationClickHandler}
            >
              Job Spec
            </ButtonStyled>
          )}
        </Grid>
      </GridContainerStyled>
      <Grid container>
        <Grid item xs={12}>
          {apply ? (
            <ApplicationForm jobId={selectedJob.id} />
          ) : (
            <JobDescription jobDescription={jobDescription} />
          )}
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  && {
    width: 65%;
    justify-content: center;
  }
`;

const GridContainerStyled = styled(Grid)`
  justify-content: space-between;
`;

const BackButton = styled.div`
  && {
    display: flex;
    align-items: flex-start;
    height: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    :hover {
      color: var(--primary-color);
      cursor: hand;
      cursor: pointer;
      text-decoration: underline;
    }
    color: var(--highlight-color);
  }
`;

const JobHeader = styled.div`
  && {
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    display: flex;
    height: 100%;
    align-items: center;
  }
`;

const ButtonStyled = styled(Button)`
  && {
    width: 100%;
    background-color: white;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 0;
    margin-top: 25px;
    margin-bottom: 25px;
    :hover {
      background-color: var(--primary-color);
    }
    .MuiTouchRipple-child {
      background-color: white;
    }
  }
`;

export default JobDetailsContainer;
