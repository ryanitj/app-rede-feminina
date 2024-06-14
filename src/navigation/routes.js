import { About } from "../screens/AboutScreen";
import { Home } from "../screens/HomeScreen";
import { Login } from "../screens/LoginScreen";
import { ProductCreate } from "../screens/ProductCreate";
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

export const AUTH_ROUTES = {
  tabs:[
    {
      name: "Início",
      component: Home
    },
    {
      name: "Bazar",
      component: Settings
    },
    {
      name: "Sobre",
      component: About
    },
  ],
  stacks: [
    {
      name: "ProductCreate",
      component: ProductCreate
    }
  ]
}