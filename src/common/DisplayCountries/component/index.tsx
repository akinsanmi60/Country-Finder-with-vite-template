import React from "react";
import { useNavigate } from "react-router-dom";
import { ContinentProp } from "../type";

type Prop = {
  DisplayData: ContinentProp[] | undefined;
};

function DisplayPage({ DisplayData }: Prop) {
  const navigate = useNavigate();

  return (
    <div className="box">
      {DisplayData?.sort((a, b) =>
        a?.name?.common > b?.name?.common ? 1 : -1,
      )?.map((item, i) => (
        <div key={i}>
          <div className="cardbox">
            <img src={item?.flags.svg} alt="" />
            <h4>{item?.name?.common}</h4>
            <div
              className="tablebox"
              onClick={() =>
                navigate(`/continentsearch/country/${item?.name?.common}`)
              }
            >
              <div className="details">
                <p>Population</p>
                <p>{item?.population}</p>
              </div>
              <div className="details">
                <p>Continent</p>
                <p>{item?.continents}</p>
              </div>
              <div className="details">
                <p>Official Language</p>
                <p>
                  {item?.languages?.eng ||
                    item?.languages?.por ||
                    item?.languages?.spa ||
                    item?.languages?.nld ||
                    item?.languages?.fra ||
                    item?.languages?.grn}
                </p>
              </div>
              <div className="details">
                <p>Time-zone</p>
                <p>{item?.timezones[0]}</p>
              </div>
              <div className="details">
                <p>UN Member</p>
                <p>{item?.unMember === true ? "A member" : "Not a member"}</p>
              </div>
              {/* <div className="details">
                      <p>Currency</p>
                      <p>
                        {item?.currencies?.BRL?.name ||
                          item?.currencies?.ARS?.name ||
                          item?.currencies?.FKP?.name ||
                          item?.currencies?.GYD?.name ||
                          item?.currencies?.EUR?.name ||
                          item?.currencies?.UYU?.name ||
                          item?.currencies?.BOB?.name ||
                          item?.currencies?.CLP?.name ||
                          item?.currencies?.COP?.name ||
                          item?.currencies?.USD?.name ||
                          item?.currencies?.PYG?.name ||
                          item?.currencies?.PEN?.name ||
                          item?.currencies?.SRD?.name ||
                          item?.currencies?.VES?.name}
                      </p>
                    </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayPage;
