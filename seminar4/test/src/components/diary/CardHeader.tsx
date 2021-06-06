import styled from "styled-components";
import React from "react";

export default function CardHeader() {
  return <CardHeaderWrap></CardHeaderWrap>;
}

const CardHeaderWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 642px;
  height: 83px;
  border-bottom: 2px solid #cea0e3;
  margin: 0 auto;
  padding-bottom: 10px;
  .header {
    &__title {
      margin: 0;
      font-size: 28px;
      font-weight: bold;
      border: none;
      background: none;
      &::placeholder {
        color: #c4c4c4;
      }
      &:focus {
        outline: none;
      }
    }
    &__empty {
      flex: 1;
    }
    &__edit {
      color: #cea0e3;
    }
  }
  button {
    border: none;
    background: none;
    font-size: 18px;
    font-weight: bold;
    padding: 0;
    width: 40px;
    text-align: center;
    margin-left: 7px;
  }
  button:hover {
    cursor: pointer;
  }
`;
