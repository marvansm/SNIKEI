import { createRootRoute, createRoute } from "@tanstack/react-router";
import HomePage from "../Featured/Pages/Home";
import Layout from "../Layout";
import shopPage from "../Featured/Pages/shop";
import LoginPage from "../Featured/Pages/Login";
import RegisterPage from "../Featured/Pages/Register";

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
export const LoginRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});
export const RegisterRouter = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

export const routeTree = rootRoute.addChildren([
  HomeRouter,
  ShopRouter,
  LoginRouter,
  RegisterRouter,
]);
