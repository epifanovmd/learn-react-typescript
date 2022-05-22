import React, { FC } from "react";
import { Container } from "../../components/layouts/container/Container.component";
import { Header } from "../../components/layouts/header/Header.component";
import styled from "styled-components";

interface IProps {}

export const Registration: FC<IProps> = ({}) => (
  <Container>
    <Wrapper>
      <Header />
      <p>{"Registration page"}</p>
    </Wrapper>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
