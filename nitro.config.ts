import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  preset: "vercel",
  entry: "./dist/server/server.js",
});