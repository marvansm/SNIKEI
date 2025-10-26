import { createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "../Featured/Pages/Home";
import Layout from "../Layout";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

export const routeTree = rootRoute.addChildren([HomeRouter]);
