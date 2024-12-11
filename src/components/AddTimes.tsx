import { useRef } from "react";

import Button from "./UI/Button.tsx";
import FormV2, { FormHandle } from "./UI/FormV2.tsx";
import Input from "./UI/Input.tsx";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <FormV2 ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button el="button">Add Timer</Button>
      </p>
    </FormV2>
  );
}
