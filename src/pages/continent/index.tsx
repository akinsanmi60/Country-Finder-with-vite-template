import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../contexts/ValueContext";
import OuterLayout from "../../styles/layout";
import { CountryProp } from "../../types/type";
import { continentUrl, getRequest } from "../../utils/apicall";
import { ContinentWrap } from "./style";

function ContinentPage() {
  const { inputValue } = useContext(SearchContext);
  const [data, setData] = useState<CountryProp[]>();

  useQuery(
    ["continents"],
    () => getRequest({ url: continentUrl(inputValue) }),
    {
      onSuccess(e) {
        setData(e);
      },
      refetchOnWindowFocus: false,
    },
  );

  console.log(data);

  return (
    <ContinentWrap>
      <OuterLayout>
        ContinentPage
        {inputValue}
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
      </OuterLayout>
    </ContinentWrap>
  );
}

export default ContinentPage;
