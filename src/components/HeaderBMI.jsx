import { styled } from "styled-components";
import BMILogo from "../assets/logo.svg";

const HeaderBMI = () => {
  return (
    <Header>
      <img src={BMILogo} alt="BMI logo" />
      <h1>Body Mass Index Calculator</h1>
      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </Header>
  );
};

export default HeaderBMI;

const Header = styled.header`
  text-align: center;
  img {
    max-width: 4rem;
    width: 100%;
    height: auto;
  }
  h1 {
    color: #253347;
    font-size: 4.8rem;
    letter-spacing: -0.12rem;
    font-weight: 600;
    margin: 2.4rem 0;
  }
  p {
    color: #5e6e85;
    font-size: 1.6rem;
    line-height: 150%;
    font-weight: 400;
    max-width: 70rem;
  }
`;
