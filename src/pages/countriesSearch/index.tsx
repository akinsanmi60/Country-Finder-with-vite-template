import React from "react";
import { BoxWrap } from "./styles";
import SearchInput from "../../common/searchInput";
import CountryLogo from "../../assets/CountrySearchlogo.svg";

function CountriesPage() {
  return (
    <BoxWrap>
      <div className="contentBox">
        <img src={CountryLogo} alt="" />
        <SearchInput />
      </div>
    </BoxWrap>
  );
}

export default CountriesPage;
