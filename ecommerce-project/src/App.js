import "./App.css";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { store } from "./components/redux/store";
import Login from "./components/pages/Login";
import "./components/global/index.scss";

const App = () => (
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Provider>
  </Router>
);
export default App;
