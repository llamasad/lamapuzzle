"use client";

import images from "@/assets/images";
import { useUserContext } from "@/contexts/userContext";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { EventHandler, FormEvent, useEffect, useState } from "react";

interface LoginOptionDto {
  label: string;
  loginUri: string;
  isSameAuthority: boolean;
}

async function getLoginOptions(): Promise<Array<LoginOptionDto>> {
  const response = await axios.get<Array<LoginOptionDto>>("/bff/login-options");
  return response.data;
}

export default function Login() {
  const user = useUserContext();
  const [loginUri, setLoginUri] = useState("");
  const currentPath = usePathname();

  useEffect(() => {
    fetchLoginOptions();
  }, []);

  async function fetchLoginOptions() {
    const loginOpts = await getLoginOptions();
    if (loginOpts?.length > 0 && loginOpts[0].loginUri) {
      setLoginUri(loginOpts[0].loginUri);
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!loginUri) return;

    const url = new URL(loginUri);
    url.searchParams.append(
      "post_login_success_uri",
      `${process.env.NEXT_PUBLIC_BASE_URI}${currentPath}`
    );
    url.searchParams.append(
      "post_login_failure_uri",
      `${process.env.NEXT_PUBLIC_BASE_URI}/login-error`
    );

    // Redirect đến login provider (Google, GitHub, etc.)
    window.location.href = url.toString();
  }

  return (
    <form onSubmit={onSubmit}>
      <button
        className="w-36 absolute top-4 cursor-pointer transform transition-transform duration-100 hover:scale-105 disabled:opacity-50"
        disabled={user.isAuthenticated}
        type="submit"
      >
        <Image src={images.login} alt="" width={160} height={160} />
      </button>
    </form>
  );
}
