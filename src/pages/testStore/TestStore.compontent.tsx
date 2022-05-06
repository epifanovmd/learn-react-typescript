import React, { FC, forwardRef, useContext, useRef, useState } from "react";
import { Container } from "../../components/layouts/container/Container.component";
import { useCounterState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { resetCountAction, upperCountAction } from "./TestStore.actions";
import { TestStoreSelectors } from "./TestStore.selectors";

interface IProps {}

// компонент с глобальным состоянием (Redux)
export const TestStore: FC<IProps> = ({}) => {
  const [localCount, setLocalCount] = useState(0);

  const count = useSelector(TestStoreSelectors.countSelector);

  const dispatch = useDispatch();

  const onResetCount = () => {
    dispatch(resetCountAction);
  };

  const onUpperCount = () => {
    dispatch(upperCountAction);
  };

  const onSetCount = () => {
    // dispatch({ type: "COUNTER/SET_COUNT", data: { count: localCount } });
    dispatch({ type: "COUNTER/SET_COUNT", data: localCount });
  };

  return (
    <Container>
      <div>{"TestStore page"}</div>
      <div>{count}</div>
      <input
        type="number"
        onChange={event => setLocalCount(+event.target.value)}
      />
      <button onClick={onSetCount}>{"Set count"}</button>
      <button onClick={onResetCount}>{"reset count"}</button>
      <button onClick={onUpperCount}>{"Upper count"}</button>
    </Container>
  );
};

// let inputRefOld: any = undefined;
//
// // Контекст
// export const TestStore: FC<IProps> = ({}) => {
//   const { state, setState } = useCounterState();
//
//   const onResetCount = () => {
//     setState({ count: 0 });
//   };
//
//   const onUpperCount = () => {
//     setState((prevState: any) => ({ count: prevState.count + 1 }));
//   };
//
//   const inputRef = useRef<any>("dafsdf");
//
//   // inputRef = {current: "dafsdf"}
//
//   const onShowValue = () => {
//     console.log("inputRef.current", inputRef.current);
//     inputRef.current.style.backgroundColor = "red";
//   };
//
//   const onResetValue = () => {
//     console.log("inputRefOld", inputRefOld);
//     inputRefOld.value = "asfdsdhgfdjfc";
//   };
//
//   return (
//     <Container>
//       <div>{"TestStore page"}</div>
//
//       <Input ref={inputRef} />
//       <input
//         ref={_ref => {
//           inputRefOld = _ref;
//         }}
//         type="text"
//       />
//       <div>{state.count}</div>
//       <button onClick={onShowValue}>{"show value"}</button>
//       <button onClick={onResetValue}>{"reset Value"}</button>
//
//       <button onClick={onResetCount}>{"reset count"}</button>
//       <button onClick={onUpperCount}>{"Upper count"}</button>
//     </Container>
//   );
// };
//
// // @ts-ignore
// const Input: FC<any> = forwardRef(({}, ref) => <input ref={ref} type="text" />);

// Локальное состояние
// export const TestStore: FC<IProps> = ({}) => {
//   const [state, setState] = useState({
//     count: 0,
//   });
//
//   const onResetCount = () => {
//     setState({ count: 0 });
//   };
//
//   const onUpperCount = () => {
//     setState((prevState: any) => ({ count: prevState.count + 1 }));
//   };
//
//   return (
//     <Container>
//       <div>{"TestStore page"}</div>
//       <div>{state.count}</div>
//       <button onClick={onResetCount}>{"reset count"}</button>
//       <button onClick={onUpperCount}>{"Upper count"}</button>
//     </Container>
//   );
// };

// Классовый компонент с локальным состоянием
// export class Registration1 extends Component<any, any> {
//   constructor(props: any) {
//     super(props);
//
//     this.state = {
//       count: 0,
//     };
//   }
//
//   private onResetCount = () => {
//     this.setState({ count: 0 });
//   };
//
//   private onUpperCount = () => {
//     this.setState((prevState: any) => ({ count: prevState.count + 1 }));
//   };
//
//   private onForceUpdate = () => {
//     this.forceUpdate();
//   };
//
//   render() {
//     return (
//       <Container>
//         <div>{"TestStore page"}</div>
//         <div>{this.state.count}</div>
//         <button onClick={this.onResetCount}>{"reset count"}</button>
//         <button onClick={this.onUpperCount}>{"Upper count"}</button>
//         <button onClick={this.onForceUpdate}>{"Force update"}</button>
//       </Container>
//     );
//   }
// }
