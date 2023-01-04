import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPage from "../../common/DisplayCountries";
import SearchContext from "../../contexts/ValueContext";
import OuterLayout from "../../styles/layout";
import { continentUrl, getRequest } from "../../utils/apicall";
import { ContinentWrap } from "./style";
import { ContinentProp } from "./type";

function ContinentPage() {
  const { inputValue } = useContext(SearchContext);
  const [data, setData] = useState<ContinentProp[] | undefined>();

  const navigate = useNavigate();

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
        <DisplayPage data={data} />
      </OuterLayout>
    </ContinentWrap>
  );
}

export default ContinentPage;
