import { createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "../Featured/Pages/Home";
import Layout from "../Layout";
import shopPage from "../Featured/Pages/shop";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const HomeRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
export const ShopRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: shopPage,
});

export const routeTree = rootRoute.addChildren([HomeRouter,ShopRouter]);
