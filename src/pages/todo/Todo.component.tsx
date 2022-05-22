import React, { FC } from "react";
import { Container } from "../../components/layouts/container/Container.component";
import { Header } from "../../components/layouts/header/Header.component";
import styled from "styled-components";

interface IProps {}

export const Todo: FC<IProps> = () => (
  <Container>
    <Wrapper>
      <Header />
      <p>{"Todo page"}</p>
    </Wrapper>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
