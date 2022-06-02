import React, {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface IProps {}

const Context = createContext("");

export const TestComponent: FC<IProps> = () => {
  const [state] = useState("TestComponent");

  const { element, value: prop } = useInputState();
  const { ref } = useVisibleRender("TestComponent", "red");

  return (
    <Context.Provider value={prop}>
      <Wrapper1 ref={ref}>
        <div>{element}</div>
        <div>{prop}</div>
        {state}
        <TestComponent1 />
      </Wrapper1>
    </Context.Provider>
  );
};

export const TestComponent1: FC<PropsWithChildren<IProps>> = memo(() => {
  const [state] = useState("TestComponent1");

  const { element } = useInputState();
  const { ref } = useVisibleRender("TestComponent1", "green");
  // const contextValue = useContext(Context);

  return (
    <Wrapper2 ref={ref}>
      <div>{element}</div>
      {/* <div>{contextValue}</div> */}
      {state}
      <TestComponent2 />
    </Wrapper2>
  );
});

export const TestComponent2: FC<PropsWithChildren<IProps>> = memo(() => {
  const [state] = useState("TestComponent2");

  const { element } = useInputState();
  const { ref } = useVisibleRender("TestComponent2", "aqua");
  const contextValue = useContext(Context);

  return (
    <Wrapper3 ref={ref}>
      <div>{element}</div>
      <div>{contextValue}</div>
      {state}
    </Wrapper3>
  );
});

const useInputState = () => {
  const [state, setState] = useState<string>("");

  const element = useMemo(
    () => (
      <input
        value={state}
        type="text"
        onChange={event => setState(event.target.value)}
      />
    ),
    [state],
  );

  return {
    element,
    value: state,
  };
};

const useVisibleRender = (name: string, color: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<any>(null);

  const startRenderLoading = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    // @ts-ignore
    ref.current?.style.background = color;
    timeoutId.current = setTimeout(() => {
      // @ts-ignore
      ref.current?.style.background = "#fff";
    }, 2000);
  };

  useEffect(() => {
    startRenderLoading();
    console.log("Render - ", name);
  });

  return {
    ref,
  };
};

const Wrapper1 = styled.div`
  z-index: 0;
  padding: 50px;
  margin: 50px;
  border: 1px solid green;
`;
const Wrapper2 = styled.div`
  z-index: 1;
  padding: 50px;
  margin: 50px;
  border: 1px solid red;
`;
const Wrapper3 = styled.div`
  z-index: 2;
  padding: 50px;
  margin: 50px;
  border: 1px solid aqua;
`;
