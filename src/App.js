import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Error404 from "./pages/404";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/404",
    element: <Error404 />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
