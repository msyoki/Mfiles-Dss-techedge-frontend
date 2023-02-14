import "./styles/App.css";
import "./styles/index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sign from "./Sign";


function App() {
  
  return (
    <Router>
        <Routes>
          <Route element={<Sign/>} path="/:fileid"/>
          <Route path="*" element={<> not found</>} />
        </Routes>
    </Router>
  );
}
// https://mfilesdssint.techedge.dev/signing/:fileid
export default App;
