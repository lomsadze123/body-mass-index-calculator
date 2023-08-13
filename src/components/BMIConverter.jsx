import { useState } from "react";
import { styled } from "styled-components";
import BMIResult from "./BMIResult";

const BMIConverter = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const result = ((weight * 10000) / height ** 2).toFixed(1);
  return (
    <Div>
      <div>
        <label htmlFor="height">
          Height <br />
          <h5>cm</h5>
          <input
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            type="number"
            id="height"
            name="unit"
            placeholder="0"
            value={height}
          />
        </label>
        <br />
        <label htmlFor="weight">
          Weight <br />
          <input
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            type="number"
            id="weight"
            name="unit"
            placeholder="0"
            value={weight}
          />
          <h5>kg</h5>
        </label>
      </div>
      <BMIResult result={result} height={height} weight={weight} />
    </Div>
  );
};

export default BMIConverter;

const Div = styled.div`
  margin: 2.8rem 0 1.6rem 0;
  label {
    font-size: 1.4rem;
    color: #5e6e85;
    font-weight: 400;
    line-height: 150%;
    position: relative;
  }
  input {
    width: 100%;
    padding: 2rem 2.4rem;
    border-radius: 1.2rem;
    font-weight: 600;
    font-size: 2.4rem;
    letter-spacing: -0.1rem;
    border: 0.1rem solid #d8e2e7;
    margin: 1rem 0;
    outline: 0;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type-number] {
    -moz-appearance: textfield;
  }
  h5 {
    color: #345ff6;
    font-size: 2.4rem;
    font-weight: 600;
    position: absolute;
    top: 5.5rem;
    right: 4rem;
  }
  @-moz-document url-prefix() {
    h5 {
      right: -30rem;
      margin-right: 10rem;
    }
  }

  @media (min-width: 786px) {
    max-width: 70rem;
    div:first-child {
      display: flex;
      gap: 1.2rem;
    }
    h5 {
      right: 4rem;
      margin-right: 0;
    }
  }
`;
