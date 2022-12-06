if (process.env.NODE_ENV === "development") {
  // HTML-only pages have no CSS without this in development
  import("../theme/minimalSprinkles.css");
}
