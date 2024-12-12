import useProgressTimer from "../hooks/useProgressTimer";
import { type Timer } from "../store/TimersContext";
import Container from "./UI/Container";

export default function Timer({ duration, name }: Timer) {
  const { progressFill, remainingTime, seconds } = useProgressTimer(duration);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <progress max={seconds} value={progressFill}></progress>
      <p>{remainingTime}</p>
    </Container>
  );
}
