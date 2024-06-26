/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import * as userAPI from "../apis/userApi";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const response = await userAPI.getUserById(email, password);
      setUser(response.data);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
