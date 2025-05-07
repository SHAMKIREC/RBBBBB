import React, { useState } from "react";

export default function AdminLogin({ onLogin }: { onLogin: (password: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Введите пароль");
      return;
    }
    setError("");
    onLogin(password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFE4D6]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-[#2563EB] text-center">Вход в админку</h1>
        <input
          type="password"
          placeholder="Пароль"
          className="w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-[#2563EB] text-white font-bold py-2 rounded hover:bg-[#1d4ed8] transition"
        >
          Войти
        </button>
      </form>
    </div>
  );
} 