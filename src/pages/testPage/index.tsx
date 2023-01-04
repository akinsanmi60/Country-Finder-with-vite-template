import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import SearchContext from "../../contexts/ValueContext";
import OuterLayout from "../../styles/layout";
import { CountryProp } from "../../types/type";
import { getRequest, countryUrl } from "../../utils/apicall";

function TestPage() {
  const { name } = useParams();
  const [data, setData] = useState<CountryProp[] | undefined>();
  const searchValues = name;

  useQuery(["country"], () => getRequest({ url: countryUrl(searchValues) }), {
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
        <p>{name}</p>
        <div>
          <img src={data?.[0]?.flags?.png} alt="" />
          <p>{data?.[0]?.name?.common}</p>
        </div>
      </OuterLayout>
    </div>
  );
}

export default TestPage;
