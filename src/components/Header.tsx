import { useTimer } from "../store/TimersContext.tsx";
import Button from "./UI/Button.tsx";

export default function Header() {
  const { isRunning, stopTimer, startTimer } = useTimer();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button el="button" onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? "Stop" : "Start"} Timer
      </Button>
    </header>
  );
}
