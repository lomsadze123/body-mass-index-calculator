import { styled } from "styled-components";

const BMIResult = ({ height, result, weight }) => {
  return (
    <Div>
      {weight <= 10 ? (
        <>
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </>
      ) : (
        <>
          <h3>Your BMI is...</h3>
          {(height >= 50 || height !== "") && <h4>{result}</h4>}
          <p>
            Your BMI suggests you're a Healthy weight. Your ideal weight is
            between{" "}
            <strong>
              {height - 115}kgs - {height - 100}kgs
            </strong>
          </p>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  background: linear-gradient(90deg, #345ff7 0%, #587dff 100%);
  padding: 3.2rem;
  border-radius: 1.6rem;
  text-align: center;
  margin-top: 2rem;
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
  h4 {
    font-size: 4.8rem;
    color: #ffffff;
  }
`;

export default BMIResult;
