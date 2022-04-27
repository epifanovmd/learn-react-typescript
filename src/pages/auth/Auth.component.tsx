import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layouts/container/Container.component";
import { string } from "yup";
const state = { username: "", password: "" };

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSetUsername = (text: string) => {
    state.username = text;
  };
  const onSetPassword = (text: string) => {
    state.password = text;
  };

  return (
    <Container>
      <Wrapper>
        <AuthWrap>
          <Title>{"Авторизация"}</Title>
          <Row>
            <Label>{"Логин"}</Label>
            <Input />
          </Row>
          <Row>
            <Label>{"Пароль"}</Label>
            <Input />
          </Row>
        </AuthWrap>
      </Wrapper>
    </Container>
  );
};

export default Auth;
const AuthWrap = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 1px 0px 14px 8px #00000030;
  background-color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Title = styled.div``;
const Row = styled.div``;
const Label = styled.div``;
const Input = styled.input``;
