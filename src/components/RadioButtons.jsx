import { styled } from "styled-components";

const RadioButtons = () => {
  return (
    <Div>
      <h2>Enter your details below</h2>
      <label htmlFor="metric">
        <input
          about="false"
          type="radio"
          name="unit"
          id="metric"
          defaultChecked
        />
        Metric
      </label>
    </Div>
  );
};

export default RadioButtons;

const Div = styled.div`
  h2 {
    font-size: 2.4rem;
    color: #253347;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -0.1rem;
  }
  label {
    font-weight: 600;
    font-size: 1.6rem;
    color: #253347;
    line-height: 150%;
  }
  input {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 4rem;
    cursor: pointer;
  }
  label:first-of-type {
    margin: 0 7rem 0 1rem;
  }
  input:first-of-type {
    margin-right: 3rem;
  }
`;
