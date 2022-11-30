import Overview from "./page/Overview";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/race/:date/:index" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
