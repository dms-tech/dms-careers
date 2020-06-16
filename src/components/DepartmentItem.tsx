import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "@emotion/styled";

import JobItem from "./JobItem";

export interface Props {
  departmentId: string;
  departmentName: string;
  jobs: [];
}

const DepartmentComponent = (props: Props) => {
  const [deptClicked, setDeptClicked] = useState(false);

  return (
    <ContainerStyled item xs={12} md={6} lg={4}>
      <DepartmentTitle onClick={() => setDeptClicked(!deptClicked)}>
        {props.departmentName}
        {deptClicked ? ` (${props.jobs.length})` : ""}
      </DepartmentTitle>

      {props.jobs.map((job: any) => {
        return deptClicked ? null : (
          <JobItem
            key={job.id}
            jobTitle={job.title}
            jobId={job.id}
            jobLocation={job.location.name}
          />
        );
      })}
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

const DepartmentTitle = styled.div`
  && {
    color: var(--secondary-color);
    font-weight: 600;
    font-size: large;
  }
`;

export default DepartmentComponent;
