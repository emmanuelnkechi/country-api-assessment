import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/countryListPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CountryListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
