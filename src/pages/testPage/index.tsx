import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OuterLayout from "../../styles/layout";
import { getRequest, countryUrl } from "../../utils/apicall";
import { CountryProp } from "../../types/type";

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
