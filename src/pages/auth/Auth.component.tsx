import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layouts/container/Container.component";
import { baseFetch } from "../../api/baseFetch";
import { useSelector } from "react-redux";

interface Props {
  initialValidate?: boolean;
}

const Auth: FC<Props> = ({ initialValidate }) => {
  const [serverError, setServerError] = useState("");
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("12345");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const auth = useSelector(state => state);

  //
  console.log("auth", auth);

  const validate = (value: string) => value.length > 4 && value.length <= 10;

  useEffect(() => {
    if (initialValidate) {
      setUsernameError(validate(username) ? "" : "Error username length");
      setPasswordError(validate(password) ? "" : "Error username length");
    }

    return () => {
      setUsernameError("");
      setPasswordError("");
    };
  }, []);

  const onSetUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setUsernameError(validate(value) ? "" : "Error username length");

      setUsername(event.target.value);
    },
    [],
  );

  const onSetPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setPasswordError(validate(value) ? "" : "Error username length");

      setPassword(event.target.value);
    },
    [],
  );

  const onSubmit = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      const res = await baseFetch("/api/auth/login", "POST", {
        username,
        password,
      }).catch(e => {
        setServerError(e.message);
      });

      if (res) {
        console.log("res", res);
      }
    },
    [],
  );

  const onClick = useCallback(() => {
    setUsernameTouched(true);
    setPasswordTouched(true);
    setUsernameError(validate(username) ? "" : "Error username length");
    setPasswordError(validate(password) ? "" : "Error username length");
    if (!usernameError && !passwordError) {
      onSubmit({ username, password });
      console.log("VALUES", { username, password });
    }
  }, [username, password, usernameError, passwordError, onSubmit]);

  const onUsernameBlur = useCallback(() => {
    setUsernameTouched(true);
  }, []);
  const onPasswordBlur = useCallback(() => {
    setPasswordTouched(true);
  }, []);

  return (
    <Container>
      <Wrapper>
        <AuthWrap>
          <div>{"Пользщователь - Unknown user"}</div>
          <Title>{"Авторизация"}</Title>

          <Row>
            <Label>{"Логин"}</Label>
            <Input
              value={username}
              onChange={onSetUsername}
              onBlur={onUsernameBlur}
            />
            <Error>{usernameTouched && usernameError}</Error>
          </Row>
          <Row>
            <Label>{"Пароль"}</Label>
            <Input
              value={password}
              onChange={onSetPassword}
              onBlur={onPasswordBlur}
            />
            <Error>{passwordTouched && passwordError}</Error>
          </Row>
          <br />
          <div>{serverError}</div>
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
