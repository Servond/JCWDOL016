import React, { useState, createContext } from "react";

interface IAuth {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuth | null>(null);

function Auth({ children }: { children: JSX.Element }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export { Auth, AuthContext };
