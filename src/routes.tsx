import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Checkout from './pages/Checkout';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={Checkout} path="/checkout"/>
      </Switch>
    </BrowserRouter>
  );
}
