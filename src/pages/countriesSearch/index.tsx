import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CountryProp } from "../../types/type";
import { BoxWrap } from "./styles";
import SearchInput from "../../common/searchInput";

function CountriesPage() {
  return (
    <BoxWrap>
      <div className="contentBox">
        <h1>Country Search</h1>

        <SearchInput />
      </div>
    </BoxWrap>
  );
}

export default CountriesPage;