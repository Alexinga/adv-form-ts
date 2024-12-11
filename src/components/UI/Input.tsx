import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...otherProps }: InputProps) {
  return (
    <div>
      {label === "none" ? null : <label htmlFor={id}>{label}</label>}
      <input {...otherProps} name={id} id={id} />
    </div>
  );
}
