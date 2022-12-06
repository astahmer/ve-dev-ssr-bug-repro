import React from "react";
import { colorMode } from "../theme/color-mode.css";
import { minimalSprinkles } from "../theme/minimalSprinkles.css";
import { Counter } from "./index/Counter";

import "../theme/minimalSprinkles.css";

export { Page };

function Page() {
  return (
    <>
      <h1>Zero JS</h1>
      <ul>
        <li>
          NOT Interactive. <Counter />
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
