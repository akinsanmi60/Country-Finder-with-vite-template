import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import SearchContext from "../../contexts/ValueContext";
import { CountryProp } from "../../types/type";
import { getRequest, subRegiontUrl } from "../../utils/apicall";

function RegionPage() {
  const { inputValue } = useContext(SearchContext);
  const [data, setData] = useState<CountryProp[]>();

  useQuery(["regions"], () => getRequest({ url: subRegiontUrl(inputValue) }), {
    onSuccess(e) {
      setData(e);
    },
    refetchOnWindowFocus: false,
  });

  console.log(data);
  return (
    <div>
      RegionPage
      <div className="box">
        {data
          ?.sort((a, b) => (a.name.official > b.name.official ? 1 : -1))
          ?.map((item, i) => (
            <div key={i}>
              <div className="cardbox">
                <img src={item?.flags.svg} alt="" />
                <p>{item?.name?.official}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RegionPage;
