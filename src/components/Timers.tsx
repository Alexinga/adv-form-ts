import { useTimer } from "../store/TimersContext";
import Timer from "./Timer";

export default function Timers() {
  const { timers } = useTimer();
  return (
    <ul>
      {timers.map((time, i) => (
        <li key={i}>
          <Timer {...time} />
        </li>
      ))}
    </ul>
  );
}
