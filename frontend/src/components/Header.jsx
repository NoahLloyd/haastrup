import React from "react";

export default function Header() {
  return (
      <header className="flex justify-between shadow-xl p-3 items-center w-screen z-10">
        <h1 className="text-3xl font-bold">Håstrup.dk</h1>
        <ul className="flex justify-between w-1/6 mr-4">
          <li className="text-gray-700 cursor-pointer">Værktøj</li>
          <li className="text-gray-700 cursor-pointer">Forside</li>
          <li className="text-gray-700 cursor-pointer">Andet </li>
        </ul>
      </header>
  );
}
