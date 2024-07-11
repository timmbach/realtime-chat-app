/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IUser } from "../types/signup.model";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
  }: IUser) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
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

  return { loading, signup };
}

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
}: IUser) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }
  return true;
}
