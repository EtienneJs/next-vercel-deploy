import React, { FC, FunctionComponent } from "react";
import { Props } from "../interface/interfaces";

export const DarkLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};
