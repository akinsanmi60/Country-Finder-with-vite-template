import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchContext from "../../contexts/ValueContext";
import { CountryProp } from "../../types/type";
import { getRequest, continentUrl, countryUrl } from "../../utils/apicall";
import OuterLayout from "../../styles/layout";

function CountryCard() {
  const { inputValue } = useContext(SearchContext);
  const [data, setData] = useState<CountryProp[] | undefined>();

  useQuery(["country"], () => getRequest({ url: countryUrl(inputValue) }), {
    onSuccess(e) {
      setData(e);
    },
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <div>
      <OuterLayout>
        CountryCard
        <p>{inputValue}</p>
        <div>
          <img src={data?.[0]?.flags?.png} alt="" />
          <p>{data?.[0]?.name?.official}</p>
        </div>
      </OuterLayout>
    </div>
  );
}

export default CountryCard;
