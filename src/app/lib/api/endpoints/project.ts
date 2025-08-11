import { fetcher } from "../client";

export const getProjects = fetcher.path("/projects").method("get").create();
