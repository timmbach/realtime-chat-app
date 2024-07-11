/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IUser } from "../types/signup.model";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthContext();

  const login = async ({ username, password }: IUser) => {
    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));

      setUser(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;

function handleInputErrors({ username, password }: IUser) {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }
  //   if (password !== confirmPassword) {
  //     toast.error("Passwords don't match");
  //     return false;
  //   }
  return true;
}
