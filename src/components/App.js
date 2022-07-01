import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer.js";
import ProductDetailContainer from "../containers/ProductDetailContener.js";

import ProductListContainer from "../containers/ProductListContainer.js";

function App() {
  return (
    <div className="App">
      <HeaderContainer />

      <Routes>
        <Route path="/" exact element={<ProductListContainer />} />
        <Route path="/product" exact element={<ProductDetailContainer />} />
      </Routes>

      {/* <ProductListContainer /> */}
    </div>
  );
}

export default App;
