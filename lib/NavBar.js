"use client";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";
export default function Navbar({ user }) {
  return (
    <nav className="sticky bg-white/300 backdrop-blur-md p-2 rounded-md top-0 right-0">
      <ul className="flex gap-2 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <li>
              <LogoutLink>Logout</LogoutLink>
            </li>
          </>
        ) : (
          <>
           <li>
              <RegisterLink>Register</RegisterLink>
            </li>
            <li>
              <LoginLink>Login</LoginLink>
            </li>
          </>
        )}
      </ul>
      <hr />
    </nav>
  );
}
