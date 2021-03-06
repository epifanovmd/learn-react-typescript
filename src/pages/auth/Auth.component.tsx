import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/layouts/container/Container.component";
import { baseFetch } from "../../api/baseFetch";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "./Auth.selectors";
import { authActionResult } from "./Auth.actions";
import { useNavigate } from "react-router-dom";

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

  const authState = useSelector(AuthSelectors.authState);
  const dispatch = useDispatch();

  const navigate = useNavigate();
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
      dispatch(authActionResult.started());
      const res = await baseFetch("/api/auth/login", "POST", {
        username,
        password,
      }).catch(e => {
        setServerError(e.message);
        dispatch(authActionResult.failed(e.message));
      });

      if (res) {
        navigate("/todo");
        dispatch(authActionResult.done(res));
      }
    },
    [dispatch, navigate],
  );

  const onClick = useCallback(() => {
    setUsernameTouched(true);
    setPasswordTouched(true);
    setUsernameError(validate(username) ? "" : "Error username length");
    setPasswordError(validate(password) ? "" : "Error username length");
    if (!usernameError && !passwordError) {
      onSubmit({ username, password });
    }
  }, [username, password, usernameError, passwordError, onSubmit]);

  const onUsernameBlur = useCallback(() => {
    setUsernameTouched(true);
  }, []);
  const onPasswordBlur = useCallback(() => {
    setPasswordTouched(true);
  }, []);

  const handleClick = () => {
    navigate("/registration");
  };

  return (
    <Container>
      <Wrapper>
        <AuthWrap>
          <div>{"?????????????????????????? - Unknown user"}</div>
          <Title>{"??????????????????????"}</Title>

          <Row>
            <Label>{"??????????"}</Label>
            <Input
              value={username}
              onChange={onSetUsername}
              onBlur={onUsernameBlur}
            />
            <Error>{usernameTouched && usernameError}</Error>
          </Row>
          <Row>
            <Label>{"????????????"}</Label>
            <Input
              value={password}
              onChange={onSetPassword}
              onBlur={onPasswordBlur}
            />
            <Error>{passwordTouched && passwordError}</Error>
          </Row>
          <br />
          <div>{serverError}</div>
          <div>{authState.loading ? "????????????????" : null}</div>
          <button onClick={onClick}>{"??????????"}</button>
          <RegistrationWrap>
            <p>?????? ?????????????????</p>
            <RegistrationButton onClick={handleClick}>
              {"??????????????????????????????"}
            </RegistrationButton>
          </RegistrationWrap>
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

const RegistrationWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RegistrationButton = styled.button`
  border: none;
  text-decoration: none;
  color: red;
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  background-color: white;
`;
