import { About } from "../screens/AboutScreen";
import { Home } from "../screens/HomeScreen";
import { Login } from "../screens/LoginScreen";
import { Register } from "../screens/RegisterScreen";
import { Settings } from "../screens/SettingsScreen";

export const UNAUTH_ROUTES = [
  {
    name: "Login",
    component: Login
  },
  {
    name: "Register",
    component: Register
  }
]

export const AUTH_ROUTES = [
  {
    name: "Home",
    component: Home
  },
  {
    name: "Settings",
    component: Settings
  },
  {
    name: "About",
    component: About
  },
]