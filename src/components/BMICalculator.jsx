import { styled } from "styled-components";
import HeaderBMI from "./HeaderBMI";
import RadioButtons from "./RadioButtons";
import BMIConverter from "./BMIConverter";

const MainBMI = () => {
  return (
    <>
      <HeaderBMI />
      <Main>
        <RadioButtons />
        <BMIConverter />
      </Main>
    </>
  );
};

export default MainBMI;

const Main = styled.main`
  background-color: white;
  padding: 2.4rem;
  border-radius: 1.6rem;
  box-shadow: 16px 32px 56px #90afd040;
`;
