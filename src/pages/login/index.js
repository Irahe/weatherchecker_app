import React, { useState } from "react";

import { login } from "../../services/api";

import {
  PageWrapper,
  LoginCard,
  InputsWrapper,
  ButtonsWrapper,
  InputSo,
  PrimaryButton,
  Title,
  Desc,
} from "./style";

const Page = ({ goTo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    const response = await login({ email, password });
    if (response) {
      window.localStorage.setItem("_token", response?.token);
      window.localStorage.setItem("_user", response?.user);
      goTo("weather");
    }
  };

  return (
    <PageWrapper>
      <LoginCard>
        <Title> Weather Checker </Title>
        <InputsWrapper>
          <Desc>Enter Your Details Below</Desc>
          <InputSo
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
            autoComplete="false"
          />

          <InputSo
            type="password"
            placeholder="Type your password"
            value={password}
            onChange={(e) => {
              setPassword(e?.target?.value);
            }}
            autoComplete="false"
          />
        </InputsWrapper>
        <ButtonsWrapper>
          <PrimaryButton
            style={{ marginTop: 20, width: "200px" }}
            onClick={doLogin}
          >
            <span>Next</span>
          </PrimaryButton>
        </ButtonsWrapper>
      </LoginCard>
    </PageWrapper>
  );
};

export default Page;
