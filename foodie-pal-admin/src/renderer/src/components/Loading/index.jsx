import { hatch } from "ldrs";

import "./index.css";
hatch.register();

export default function Loading({ message }) {
  return (
    <div className="flex center column gap full-height full-width loading">
      <l-hatch stroke="4" size="40" speed="4.5" color="#FE8A01"></l-hatch>
      <p className="color-white loading-message margin padding">{message}</p>
    </div>
  );
}
