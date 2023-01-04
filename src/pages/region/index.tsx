import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import DisplayCoutries from "../../common/DisplayCountries";
import { ContinentProp } from "../../common/DisplayCountries/type";
import SearchContext from "../../contexts/ValueContext";
import { getRequest, subRegiontUrl } from "../../utils/apicall";

function RegionPage() {
  const title = "Region Page";

  const { inputValue } = useContext(SearchContext);
  const [regionData, setRegionData] = useState<ContinentProp[] | undefined>();

  useQuery(["regions"], () => getRequest({ url: subRegiontUrl(inputValue) }), {
    onSuccess(e) {
      setRegionData(e);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <DisplayCoutries data={regionData} headTitle={title} />
    </>
  );
}

export default RegionPage;
