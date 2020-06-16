import React from "react";
import styled from "@emotion/styled";

const SearchBarComponent = (props: any) => {
  return (
    <InputStyled
      type="text"
      placeholder="Know the job you're looking for?"
      onChange={(e) => {
        props.setSearchString(e.target.value);
      }}
    ></InputStyled>
  );
};

const InputStyled = styled.input`
  && {
    padding-top: 25px;
    padding-bottom: 25px;
    width: 80%;
    text-align: center;
    border: 0;
    :focus {
      outline: none;
      ::placeholder {
        color: #fff;
      }
    }
    :hover {
      color: var(--highlight-color);
      cursor: hand;
      cursor: pointer;
    }
  }
`;

export default SearchBarComponent;
