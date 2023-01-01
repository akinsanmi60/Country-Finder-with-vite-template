/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthUserType = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    state: string;
    lga: string;
    gender: string;
    _id: string;
    userIdNos: string;
    accountType: string;
  };
  token?: string;
  transaction?: {
    reference: string;
    status: string;
    trans: string;
    message: string;
    transacton: string;
  };
};

type ContextType = {
  authUser: AuthUserType | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};
const AuthContext = createContext({} as ContextType);

export const pushToLocalStorage = (token: string, user?: any) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  const userString = localStorage.getItem("user") as string;
  const userTransaction = localStorage.getItem("transaction") as string;

  return { userString, userTransaction };
};

const { userString, userTransaction } = getUser();
const user = JSON.parse(userString);
const transaction = JSON.parse(userTransaction);

export function AuthProvider({ children }: ProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>({
    user,
    transaction,
  });
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setAuthUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
