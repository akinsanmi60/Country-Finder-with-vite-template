import React from "react";
import { Route, Routes } from "react-router-dom";
import ContinentPage from "./pages/continent";
import CountriesPage from "./pages/countriesSearch";
import CountryCard from "./pages/country";
import RegionPage from "./pages/region";
import TestPage from "./pages/testPage";
import LayoutWrapper from "./utils/WebpageWrap";

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/countrysearch" element={<CountryCard />} />
        <Route path="/continentsearch" element={<ContinentPage />} />
        <Route path="/continentsearch/country/:name" element={<TestPage />} />
        <Route path="regionsearch" element={<RegionPage />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;
