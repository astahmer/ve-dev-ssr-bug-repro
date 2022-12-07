import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
// import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { vanillaExtractPlugin } from "./ve-plugin";
import Inspect from "vite-plugin-inspect";

const config: UserConfig = {
  plugins: [
    Inspect(),
    react(),
    ssr({ includeAssetsImportedByServer: true }),
    vanillaExtractPlugin({ identifiers: "debug" }),
  ],
};

export default config;
