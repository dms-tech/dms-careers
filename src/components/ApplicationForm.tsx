import React, { useEffect } from "react";
import useScript from "../hooks/useScript";
import styled from "@emotion/styled";

export interface Window {
  Grnhse(): Function;
}

const ApplicationFormComponent = (props: any) => {
  //   useScript("https://boards.greenhouse.io/embed/job_board/js?for=dms");
  useEffect(() => {
    const script = document.createElement("script");

    script.text = `Grnhse.Iframe.load(${props.jobId})`;

    document.body.appendChild(script);
  });

  return (
    <ContainerStyled>
      <div id="grnhse_app"></div>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  && {
    .app_body {
      background-color: pink;
    }
    width: 100%;
  }
`;

export default ApplicationFormComponent;
