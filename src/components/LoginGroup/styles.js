import styled from "styled-components";
import {FaRegWindowClose} from "react-icons/fa"

export const Container = styled.form`
  box-sizing: border-box;
  background-color: #474F38;
  display: flex;
  flex-direction: column;
  margin: ${props => props.msg ? "35px auto 0 auto" : "112px auto 0 auto"};
  max-width: 520px;
  border: 3px solid #BABABA;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  align-items: center;
  padding: 36px 0;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 46px;
  text-align: center;
  color: #F1F1E8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 36px;
`;

export const H3 = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  color: #F1F1E8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 42px 0;
`

export const ErrorMessage = styled.div`
  border: 2px solid rgb(234, 126, 126);
  width: 70%;
  text-align: center;
  margin-top: 42px;
  padding: 5px 15px 5px 5px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: rgb(229, 174, 174);
  font-style: normal;
  font-weight: 400;
  line-break: loose;
  color: red;
  position: relative;
`

export const ButtonFechar = styled(FaRegWindowClose)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  opacity: .5;
  &:hover{
    opacity: .3;
  }
`