import Homepage from "./component/Homepage";
import Productpage from "./component/Productpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </Router>
  );
}

export default App;
