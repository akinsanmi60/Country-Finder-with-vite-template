import React from "react";
import OuterLayout from "../../styles/layout";
import DisplayPage from "./component";
import { DisplayWrap } from "./style";
import { ContinentProp } from "./type";

type Prop = {
  data: ContinentProp[] | undefined;
  headTitle: string;
};

function DisplayCoutries({ data, headTitle }: Prop) {
  return (
    <DisplayWrap>
      <OuterLayout>
        <h1>{headTitle}</h1>

        <DisplayPage DisplayData={data} />
      </OuterLayout>
    </DisplayWrap>
  );
}

export default DisplayCoutries;
