import React from "react";
import FootWrapper from "./style";

function index() {
  const newYear = new Date().getFullYear();
  return (
    <FootWrapper>
      <p>
        Copyright © Mozilla Public License MPL 2.0 {newYear}. All rights
        reserved
      </p>
    </FootWrapper>
  );
}

export default index;
