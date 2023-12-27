import { hatch } from "ldrs";

import "./index.css";
hatch.register();

export default function Loading() {
  return (
    <div className="flex center full-height full-width loading">
      <l-hatch stroke="4" size="40" speed="4.5" color="#FE8A01"></l-hatch>
    </div>
  );
}
