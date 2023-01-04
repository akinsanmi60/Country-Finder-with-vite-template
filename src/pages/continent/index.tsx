import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DisplayCoutries from "../../common/DisplayCountries";
import SearchContext from "../../contexts/ValueContext";
import { continentUrl, getRequest } from "../../utils/apicall";
import { ContinentProp } from "./type";

function ContinentPage() {
  const title = "Continent Page";
  const { inputValue } = useContext(SearchContext);
  const [continentData, setContinentData] = useState<
    ContinentProp[] | undefined
  >();

  useQuery(
    ["continents"],
    () => getRequest({ url: continentUrl(inputValue) }),
    {
      onSuccess(e) {
        setContinentData(e);
      },
      refetchOnWindowFocus: false,
    },
  );

  console.log(continentData);

  return (
    <>
      <DisplayCoutries data={continentData} headTitle={title} />
    </>
  );
}

export default ContinentPage;
