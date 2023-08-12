import { styled } from "styled-components";
import MainBMI from "./components/BMICalculator";

function App() {
  return (
    <Body>
      <MainBMI />
    </Body>
  );
}

export default App;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1.6rem;
  background: linear-gradient(
    290.1deg,
    #d6e6fe 0%,
    rgba(214, 252, 254, 0) 100%
  );
`;
