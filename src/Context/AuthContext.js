import { useEffect } from "react";
import { createContext, useState } from "react";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );

  const login = () => {
    setcurrentUser({
      id: 1,
      Name: "vishal",
      profilepic:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <Authcontext.Provider value={{ currentUser, login }}>
      {children}
    </Authcontext.Provider>
  );
};
