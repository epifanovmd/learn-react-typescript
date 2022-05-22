const initialCounterState: any = {
  count: 0,
};

export const counterState = (state: any = initialCounterState, action: any) => {
  switch (action.type) {
    case "COUNTER/UPPER": {
      const newState = { ...state, count: state.count + 1 };

      return newState;
    }

    case "COUNTER/RESET": {
      const newState = { ...state, count: 0 };

      return newState;
    }

    case "COUNTER/SET_COUNT": {
      const newState = { ...state, count: action.data };

      return newState;
    }

    default:
      return state;
  }
};
