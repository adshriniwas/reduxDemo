import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./Router";
function App() {
  return (
    <div className="app">
      <Routes>
        {ROUTER.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={<route.element />} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
