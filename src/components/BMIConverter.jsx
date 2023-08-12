import { styled } from "styled-components";

const BMIConverter = () => {
  return (
    <Div>
      <label htmlFor="height">
        Height <br />
        <input type="text" id="height" name="unit" placeholder="0" />
      </label>
      <br />
      <label htmlFor="weight">
        Weight <br />
        <input type="text" id="weight" name="unit" placeholder="0" />
      </label>
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
  }
`;
