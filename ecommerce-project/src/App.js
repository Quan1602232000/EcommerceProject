import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./components/redux/store";

const App = () => (
  <Router>
    <Provider store={store}>
      Hello world
    </Provider>
  </Router>
);
export default App;
