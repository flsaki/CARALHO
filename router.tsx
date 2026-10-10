import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({ routeTree, history: createHashHistory() });
}

declare module "@tanstack/react-router" {
  interface Register { router: ReturnType<typeof getRouter> }
}
