import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepages from "./pages/Homepages";

import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepages />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
