import React from "react";
import ToolOptions from "./ToolOptions";

export default function ToolsList() {
  const tools = [
    { navn: "Skruetrækker", lånt: "Noah" },
    { navn: "Hammer", lånt: false },
    { navn: "Boremaskine", lånt: false },
  ];

  return (
    <table className="w-full">
      {tools.map((tool) => (
        <tr className="items-center border p-2 flex justify-between ">
          <td className="p-2 font-light text-xl">{tool.navn}</td>
          <ToolOptions lånt={tool.lånt} />
        </tr>
      ))}
    </table>
  );
}
