import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AboutUs } from "../views/about-us/AboutUs";
import { Home } from "../views/home/Home";
import { News } from "../views/news/News";
import { Products } from "../views/products/Products";
import { Navbar } from "../views/shared/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <div className="main">
        <Navbar />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/products" component={Products} />
          <Route path="/about-us" component={AboutUs} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
}
