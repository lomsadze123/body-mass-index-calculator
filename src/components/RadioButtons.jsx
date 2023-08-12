import { styled } from "styled-components";

const RadioButtons = () => {
  return (
    <Div>
      <h2>Enter your details below</h2>
      <label htmlFor="metric">
        <Radio about="false" type="radio" name="unit" id="metric" />
        Metric
      </label>
      <label htmlFor="imperial">
        <Radio about="true" type="radio" name="unit" id="imperial" />
        Imperial
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
    width: 1.5rem;
    height: 1.5rem;
    /* appearance: none; */
    background-color: #345ff6;
    border-radius: 50%;
    box-shadow: 0 0 0 8px #e1e7fe;
    outline: 0.1rem solid #d8e2e7;
    margin-top: 4rem;
  }
  label:first-of-type {
    margin: 0 7rem 0 1rem;
  }
  input:first-of-type {
    margin-right: 3rem;
  }
`;

const Radio = styled.input`
  appearance: ${(props) => (props.about ? "none" : "")} !important;
`;
