import { createContext, useContext, useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

const register = async (formData) => {
  try {
    const { data } = await API.post("/auth/register", formData);

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);

    toast.success("Registered successfully");
  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
  }
};

const login = async (formData) => {
  try {
    const { data } = await API.post("/auth/login", formData);

    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);

    toast.success("Login successful");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  }
};

 const logout = () => {
  localStorage.removeItem("user");
  setUser(null);
  toast.success("Logged out");
};

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);