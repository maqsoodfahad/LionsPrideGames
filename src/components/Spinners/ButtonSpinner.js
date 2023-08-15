import React, { CSSProperties } from "react";
import { SpinnerDotted } from "spinners-react";
export default function ButtonSpinner({ disabled }) {
  return (
    <div style={{ color: "red" }}>
      <SpinnerDotted
        loading={`${disabled}`}
        size={40}
        height={40}
        color="#150F20"
      />
    </div>
  );
}
