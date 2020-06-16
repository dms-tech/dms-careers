import React from "react";
import styled from "@emotion/styled";

const JobDescriptionComponent = (props: any) => {
  return <ContainerStyled dangerouslySetInnerHTML={props.jobDescription} />;
};

const ContainerStyled = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export default JobDescriptionComponent;
