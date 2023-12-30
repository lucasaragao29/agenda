import { useState } from "react";
import MyTabs from "./screens";
import LoginScreen from "./screens/login";

export default function Login() {
  const [telaLogin, setTelaLogin] = useState(true);

  return telaLogin  ?  <MyTabs /> : <LoginScreen/> ;
}