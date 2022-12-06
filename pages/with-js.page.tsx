import React from "react";
import { colorMode } from "../theme/color-mode.css";
import { minimalSprinkles } from "../theme/minimalSprinkles.css";
import { Counter } from "./index/Counter";

export { Page };

function Page() {
  return (
    <>
      <h1>With JS</h1>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div className={colorMode.light}>
        <div className={minimalSprinkles({ backgroundColor: "main" })}>
          light brandbrandbrand
        </div>
      </div>
      <div className={colorMode.dark}>
        <div className={minimalSprinkles({ backgroundColor: "secondary" })}>
          dark brandbrandbrand
        </div>
      </div>
    </>
  );
}
