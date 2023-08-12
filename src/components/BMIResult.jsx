import { useEffect } from "react";
import { styled } from "styled-components";

const BMIResult = () => {
  return (
    <Div>
      <h3>Welcome!</h3>
      <p>Enter your height and weight and you'll see your BMI result here</p>
    </Div>
  );
};

const Div = styled.div`
  background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  padding: 3.2rem;
  border-radius: 1.6rem;
  text-align: center;
  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 110%;
    color: #ffffff;
  }
  p {
    font-size: 1.4rem;
    color: #ffffff;
    line-height: 150%;
    font-weight: 400;
    margin-top: 1.6rem;
  }
`;

export default BMIResult;
