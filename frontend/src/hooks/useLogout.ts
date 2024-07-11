/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
// import { IUser } from "../types/signup.model";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

function useLogout() {
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");

      setUser(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}

export default useLogout;
