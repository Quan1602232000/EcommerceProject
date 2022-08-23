import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { store } from "./components/redux/store";
import Login from "./components/pages/Login";
import "./components/global/index.scss";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "login", element: <Login /> },
  ]);
  return routes;
};

const AppWrapper = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
export default AppWrapper;
