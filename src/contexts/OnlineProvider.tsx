import React, { useState, useEffect } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProp = {
  onlineStatus: boolean;
  setOnlineStatus?: React.Dispatch<React.SetStateAction<boolean>>;
};

const OnlineStatusContext = React.createContext({} as ContextProp);

export const OnlineStatusProvider = ({ children }: ProviderProps) => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.removeEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);

  return (
    <OnlineStatusContext.Provider value={{ onlineStatus }}>
      {children}
    </OnlineStatusContext.Provider>
  );
};

export default OnlineStatusContext;
