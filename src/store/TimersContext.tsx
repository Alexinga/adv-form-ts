import { createContext, useContext, useReducer, type ReactNode } from "react";

// Timer Object to be held inside of the initial state "timers" array
export type Timer = {
  name: string;
  duration: number;
};

// Initial State Props that tell the initial state of what type it will hold
type InitialStateProps = {
  isRunning: boolean;
  timers: Timer[];
};

// Timer Function types for when creating functions inside of provider
type TimerFunction = {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

// Type to hold for "createContext"
type TimersContextValue = InitialStateProps & TimerFunction;

// Provider needs to return children
type TimerProviderProps = {
  children: ReactNode;
};

// AddTimerProps for reducer function
type AddTimerProps = {
  type: "Add_TIMER";
  payload: Timer;
};

// StartTimerProps for reducer function
type StartTimerProps = {
  type: "START_TIMER";
};

// StopTimerProps for reducer function
type StopTimerProps = {
  type: "STOP_TIMER";
};

// ActionProps to tie in all of function props into one for action
type ActionProps = AddTimerProps | StartTimerProps | StopTimerProps;

const TimerContext = createContext<TimersContextValue | null>(null);
const initialState: InitialStateProps = {
  isRunning: false,
  timers: [],
};

function reducer(
  state: InitialStateProps,
  action: ActionProps
): InitialStateProps {
  switch (action.type) {
    case "Add_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    case "START_TIMER":
      return { ...state, isRunning: true };
    case "STOP_TIMER":
      return { ...state, isRunning: false };
    default:
      throw new Error("An error occurred in the reducer function");
  }
}

export default function TimerProvider({ children }: TimerProviderProps) {
  const [{ isRunning, timers }, dispatch] = useReducer(reducer, initialState);
  function startTimer() {
    dispatch({ type: "START_TIMER" });
  }
  function stopTimer() {
    dispatch({ type: "STOP_TIMER" });
  }
  function addTimer(objTimer: Timer) {
    dispatch({ type: "Add_TIMER", payload: objTimer });
  }
  return (
    <TimerContext.Provider
      value={{ isRunning, timers, startTimer, stopTimer, addTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
}

function useTimer() {
  const contextValue = useContext(TimerContext);
  if (contextValue === undefined || !contextValue)
    throw new Error(
      "This Meal Context is being used outside of the Meal Provider"
    );
  return contextValue;
}

export { useTimer, TimerProvider };
