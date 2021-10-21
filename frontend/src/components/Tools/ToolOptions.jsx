import React from "react";

export default function ToolOptions(props) {
  if (!props.lånt) {
    return <div>
        <button className="bg-green-600 px-6 py-1 text-white rounded mr-2">Lån</button>
    </div>
  }

  return (
    <div>
      <button className="bg-red-600 px-6 py-1 text-white rounded mr-2">Lånt af {props.lånt}</button>
      <button className="rounded bg-yellow-400 text-white px-6 py-1 mr-2">
        Aflever
      </button>
    </div>
  );
}
