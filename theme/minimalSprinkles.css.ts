import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

export const minimalSprinkles = createSprinkles(
  defineProperties({
    conditions: {
      idle: {},
      focus: { selector: "&:focus" },
      hover: { selector: "&:hover" },
    },
    defaultCondition: "idle",
    properties: {
      color: {
        // brand: vars.color.brand,
        brand: "red",
        notUsed: "blue",
        stillNotUsed: "cyan",
      },
      backgroundColor: {
        main: "green",
        secondary: "brown",
        notUsedBg: "yellow",
        stillNotUsedBg: "magenta",
      },
    },
  })
);
export type MinimalSprinkles = Parameters<typeof minimalSprinkles>[0];
