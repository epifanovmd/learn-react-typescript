import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layouts/container/Container.component";
import { baseFetch } from "../../api/baseFetch";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "./Auth.selectors";
import { authActionResult } from "./Auth.actions";

interface Props {
  initialValidate?: boolean;
}

const Auth: FC<Props> = () => {
  const [serverError, setServerError] = useState("");
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("12345");

  const authState = useSelector(AuthSelectors.authState);
  const dispatch = useDispatch();

  //
  console.log("authState in component", authState);

  const onSetUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    [],
  );

  const onSetPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      dispatch(authActionResult.started());
      const res = await baseFetch("/api/auth/login", "POST", {
        username,
        password,
      }).catch(e => {
        setServerError(e.message);
        dispatch(authActionResult.failed(e.message));
      });

      if (res) {
        console.log("res", res);
        dispatch(authActionResult.done(res));
      }
    },
    [dispatch],
  );

  const onClick = useCallback(() => {
    onSubmit({ username, password });
  }, [username, password, onSubmit]);

  return (
    <Container>
      <Wrapper>
        <AuthWrap>
          <div>{"Пользщователь - Unknown user"}</div>
          <Title>{"Авторизация"}</Title>

          <Row>
            <Label>{"Логин"}</Label>
            <Input value={username} onChange={onSetUsername} />
          </Row>
          <Row>
            <Label>{"Пароль"}</Label>
            <Input value={password} onChange={onSetPassword} />
          </Row>
          <br />
          <div>{serverError}</div>
          <div>{authState.loading ? "Загрузка" : null}</div>
          <button onClick={onClick}>{"Войти"}</button>
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
const Error = styled.div`
  color: red;
`;
const Input = styled.input``;
