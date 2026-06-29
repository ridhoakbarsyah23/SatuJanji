"use client";

import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState } from "react";

type PasswordFieldProps = {
  label?: string;
  name?: string;
  placeholder?: string;
};

export function PasswordField({
  label = "Password",
  name = "password",
  placeholder = "Masukkan password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;

  return (
    <label className="grid gap-2 text-sm font-semibold text-gray-700">
      {label}
      <span className="relative">
        <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
        <input
          type={visible ? "text" : "password"}
          name={name}
          autoComplete="current-password"
          placeholder={placeholder}
          required
          className="focus-ring min-h-12 w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-12 text-sm font-normal text-gray-900 outline-none placeholder:text-gray-400"
        />
        <button
          type="button"
          className="focus-ring absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          aria-label={visible ? "Sembunyikan password" : "Tampilkan password"}
          aria-pressed={visible}
          onClick={() => setVisible((value) => !value)}
        >
          <Icon className="size-4" aria-hidden="true" />
        </button>
      </span>
    </label>
  );
}
