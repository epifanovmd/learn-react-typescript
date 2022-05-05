import React, { FC, useContext, useState } from "react";
import { Container } from "../../components/layouts/container/Container.component";
import { useCounterState } from "../../store/store";

interface IProps {}

// // компонент с глобальным состоянием (Redux)
// export const Registration: FC<IProps> = ({}) => {
//   const { state, setState } = useContext<any>(Context);
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
//       <div>{"Registration page"}</div>
//       <div>{state.count}</div>
//       <button onClick={onResetCount}>{"reset count"}</button>
//       <button onClick={onUpperCount}>{"Upper count"}</button>
//     </Container>
//   );
// };

// Контекст
export const Registration: FC<IProps> = ({}) => {
  const { state, setState } = useCounterState();

  const onResetCount = () => {
    setState({ count: 0 });
  };

  const onUpperCount = () => {
    setState((prevState: any) => ({ count: prevState.count + 1 }));
  };

  return (
    <Container>
      <div>{"Registration page"}</div>
      <div>{state.count}</div>
      <button onClick={onResetCount}>{"reset count"}</button>
      <button onClick={onUpperCount}>{"Upper count"}</button>
    </Container>
  );
};

// Локальное состояние
// export const Registration: FC<IProps> = ({}) => {
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
//       <div>{"Registration page"}</div>
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
//         <div>{"Registration page"}</div>
//         <div>{this.state.count}</div>
//         <button onClick={this.onResetCount}>{"reset count"}</button>
//         <button onClick={this.onUpperCount}>{"Upper count"}</button>
//         <button onClick={this.onForceUpdate}>{"Force update"}</button>
//       </Container>
//     );
//   }
// }
