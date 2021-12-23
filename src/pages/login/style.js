import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/background.png");
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
  max-width: 580px;
  border-radius: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: lightblue;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  height: 55%;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  height: 25%;
`;

export const LoginButton = styled.button`
  background-color: lightpink;
  border-radius: 5px;
  min-height: 40px;
  min-width: 32px;
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :active {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.span`
  font-size: 62px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4c4e6a;
  width: 100%;
  margin-top: 20px;
`;
export const Desc = styled.span`
  margin-top: 32px;
  margin-bottom: 13px;
  font-size: 18px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.15px;
  text-align: left;
  color: #6e6f84;
`;
export const InputSo = styled.input`
  height: 40px;
  border-radius: 30px;
  border: solid 1px #f3f3f3;
  background-color: #ffffff;
  padding-left: 24.5px;
  width: 300px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    height: 19px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    text-align: left;
    color: #c7c7d5;
  }
  :focus {
    outline: none;
    border: 1px solid #15d4d8;
  }
`;

export const PrimaryButton = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 255px;
  height: 40px;
  border-radius: 30px;
  backdrop-filter: blur(20px);
  background-image: linear-gradient(84deg, #4a54df, #15d4d8 100%);
  cursor: pointer;

  :hover {
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    background-image: linear-gradient(84deg, #83a9f7, #0beaf3 100%);
  }
  > span {
    font-family: "Roboto",
    height: 20px;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;
