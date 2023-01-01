import React, { useContext, useEffect, useState } from "react";
import HeaderBox from "./style";
import moment from "moment";

function Header() {
  const [timer, setTimer] = useState(new Date());
  const userLocation = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const userTime = moment().format("dddd, MMMM Do YYYY");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderBox>
      <div className="small_nav">
        <div className="text">
          <p>{timer.toLocaleTimeString()}</p>
          <p className="mobile">{userLocation}</p>
          <p className="mobile">{userTime}</p>
        </div>
      </div>
    </HeaderBox>
  );
}

export default Header;
