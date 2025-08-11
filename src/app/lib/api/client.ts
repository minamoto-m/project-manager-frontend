import { Fetcher } from "openapi-typescript-fetch";
import type { paths } from "types/openapi.d.ts";

export const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: "http://localhost:8080/api/v1",
  init: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});
