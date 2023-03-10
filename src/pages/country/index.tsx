import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchContext from "../../contexts/ValueContext";
import { CountryProp } from "../../types/type";
import { getRequest, countryUri } from "../../utils/apicall";
import OuterLayout from "../../styles/layout";
import { useParams } from "react-router-dom";

function CountryCard() {
  const { inputValue } = useContext(SearchContext);
  const [data, setData] = useState<CountryProp[] | undefined>();

  useQuery(["country"], () => getRequest({ url: countryUri(inputValue) }), {
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
        {inputValue}
        <div>
          <img src={data?.[0]?.flags?.png} alt="" />
          <p>{data?.[0]?.name?.common}</p>
        </div>
      </OuterLayout>
    </div>
  );
}

export default CountryCard;
