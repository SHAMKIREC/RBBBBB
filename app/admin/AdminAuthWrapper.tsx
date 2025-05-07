"use client";
import React, { useState, useEffect } from "react";
import AdminLogin from "./login";

export default function AdminAuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(typeof window !== "undefined" && localStorage.getItem("admin_auth") === "1");
  }, []);

  const handleLogin = async (password: string) => {
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("admin_auth", "1");
      setIsAuth(true);
    } else {
      alert("Неверный пароль");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsAuth(false);
  };

  if (!isAuth) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div>
      <div className="w-full flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 font-bold"
        >
          Выйти
        </button>
      </div>
      {children}
    </div>
  );
} 